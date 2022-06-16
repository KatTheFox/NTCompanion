import axios from "axios";
import { error } from "console";
import * as fs from "fs-extra";
import { readFileSync } from "fs-extra";
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

const rawJson = readFileSync(config.saveFile, "utf-8");
const saveData = JSONC.parse(rawJson) as SaveData;
let streamId = config.overrideId;
let streamKey = config.overrideKey;
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
  streamId = saveData.options.streamid;
  streamKey = saveData.options.streamkey;
}
const apiUrl = `http://tb-api.xyz/stream/get?s=${streamId}&key=${streamKey}`;
let timestamp = 0;
function main() {
  axios({
    method: "get",
    url: apiUrl,
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
      if (data.previous !== null && timestamp !== data.previous.timestamp) {
        timestamp = data.previous.timestamp;
        logLastRun(data.previous);
        await exportToCsv(path.join(DATADIR, `${streamId}`, "runs.csv"));
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
}
setInterval(main, config.refreshInterval);
function logLastRun(run: RunData) {
  const dataDir = path.join(DATADIR, "ntcompanion", streamId);
  const jsonPath = path.join(dataDir, "runs.json");
  if (fs.existsSync(jsonPath) && fs.statSync(jsonPath).size > 0) {
    const q = fs.readJSONSync(jsonPath) as RunData[];
    q.push(run);
    fs.writeJsonSync(jsonPath, q);
  } else {
    fs.mkdirSync(dataDir, { recursive: true });
    const runs = [run];
    fs.writeJSONSync(jsonPath, runs);
  }
}
async function exportToCsv(out: string) {
  const dataDir = path.join(DATADIR, streamId);
  const jsonPath = path.join(dataDir, "runs.json");
  const json = fs.createReadStream(jsonPath);
  await fs.writeFile(out, "");
  const csv = fs.createWriteStream(out);
  const processor = new AsyncParser().fromInput(json).toOutput(csv);
  processor.promise(false).catch((err) => {
    console.error(err);
  });
}
