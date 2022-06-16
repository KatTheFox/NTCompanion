import axios from "axios";
import { error } from "console";
import * as fs from "fs-extra";
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

  setInterval(mainLoop, config.refreshInterval);
}
function mainLoop() {
  axios({
    method: "get",
    url: v.apiUrl,
    responseType: "json",
  })
    .then(async (response) => {
      const data = response.data as APIData;
      if (data.current !== null) {
        console.clear();
        console.log(getMutationsStringify(data.current.mutations));
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
        logLastRun(data.previous);
        await exportToCsv(path.join(DATADIR, `${v.streamID}`, "runs.csv"));
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
}
async function logLastRun(run: RunData) {
  const dataDir = path.join(DATADIR, "ntcompanion", v.streamID);
  const jsonPath = path.join(dataDir, "runs.json");
  if ((await fs.pathExists(jsonPath)) && (await fs.stat(jsonPath)).size > 0) {
    const q = (await fs.readJSON(jsonPath)) as RunData[];
    q.push(run);
    await fs.writeJSON(jsonPath, q);
  } else {
    await fs.mkdir(dataDir, { recursive: true });
    const runs = [run];
    await fs.writeJSON(jsonPath, runs);
  }
}
async function exportToCsv(out: string) {
  const dataDir = path.join(DATADIR, v.streamID);
  const jsonPath = path.join(dataDir, "runs.json");
  const json = fs.createReadStream(jsonPath);
  await fs.writeFile(out, "");
  const csv = fs.createWriteStream(out);
  const processor = new AsyncParser().fromInput(json).toOutput(csv);
  processor.promise(false).catch((err) => {
    console.error(err);
  });
}
main();
