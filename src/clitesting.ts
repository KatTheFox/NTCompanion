import { error } from "console";
import * as fs from "fs-extra";
import { get } from "http";
import { AsyncParser } from "json2csv";
import * as JSONC from "jsonc-parser";
import path from "path";
import {
  APIData,
  Character,
  config,
  DATADIR,
  getMutationsStringify,
  RunData,
  SaveData,
  weaponToString,
} from "./constants";
const v = {
  streamID: "",
  streamKey: "",
  apiUrl: "",
  timestamp: 0,
  heapTot: 0,
  heapUsed: 0,
  do: true,
};
async function main() {
  const rawJson = await fs.readFile(config.saveFile, "utf-8");
  const saveData = JSONC.parse(rawJson) as SaveData;
  v.streamID = config.overrideId;
  v.streamKey = config.overrideKey;
  if (!config.overrideMode) {
    if (saveData.options.streamkey === null) {
      error(
        "No stream key found! please enable stream key in Nuclear Throne's settings, then restart this program"
      );
    }
    if (saveData.options.streamid === null) {
      error(
        "It looks like you're playing on a non-steam version of Nuclear Throne. The Nuclear Throne API requires you to be playing on the Steam version."
      );
    }
    v.streamID = saveData.options.streamid;
    v.streamKey = saveData.options.streamkey;
  }
  v.apiUrl = `http://tb-api.xyz/stream/get?s=${v.streamID}&key=${v.streamKey}`;

  setInterval(async () => {
    await mainLoop();
  }, config.refreshInterval);
}
async function mainLoop() {
  let json = "";

  get(v.apiUrl, (res) => {
    res.on("data", (chunk) => {
      json += chunk;
    });
    res.on("end", () => {
      res.destroy();
      let data = JSONC.parse(json) as APIData;
      if (data.current !== null) {
        console.clear();
        console.log(getMutationsStringify(data.current.mutations));
        let memoryUsage = process.memoryUsage();
        console.log(
          `Weapons:\n\tPrimary= ${weaponToString(
            data.current.wepA
          )}\n\tSecondary= ${weaponToString(data.current.wepB)}\nCharacter: ${
            Character[data.current.char]
          }\nKills: ${data.current.kills}\nLevel: ${data.current.world}-${
            data.current.level
          }\nHP: ${data.current.health}`
        );
      }
      if (data.previous !== null && v.timestamp !== data.previous.timestamp) {
        v.timestamp = data.previous.timestamp;
        logLastRun(data.previous).then(() => {
          exportToCsv(path.join(DATADIR, `${v.streamID}`, "runs.csv"));
        });
      }
    });
    res.on("error", (err) => {
      console.error(err);
      res.resume();
    });
  });
}
async function logLastRun(run: RunData) {
  const dataDir = path.join(DATADIR, "ntcompanion", v.streamID);
  await fs.mkdirp(dataDir);
  const jsonPath = path.join(dataDir, "runs.json");

  fs.readJSON(jsonPath)
    .catch(async (reason) => {
      console.error("json logger fault");
      await fs.mkdirp(dataDir);
      const runs = [run];
      await fs.writeJSON(jsonPath, runs);
    })
    .then(async (jsonData: RunData[]) => {
      jsonData.push(run);
      await fs.writeJSON(jsonPath, jsonData);
    });
}

async function exportToCsv(out: string) {
  const dataDir = path.join(DATADIR, v.streamID);
  await fs.mkdirp(dataDir);
  const jsonPath = path.join(dataDir, "runs.json");
  if (!fs.existsSync(jsonPath)) {
    return;
  }
  const json = fs.createReadStream(jsonPath);
  await fs.writeFile(out, "");
  const csv = fs.createWriteStream(out);
  const processor = new AsyncParser().fromInput(json).toOutput(csv);
  processor
    .promise(false)
    .catch((err) => {
      console.error("csv fault");
      console.error(err);
    })
    .finally(() => {
      json.destroy();
      csv.destroy();
    });
}
main();
