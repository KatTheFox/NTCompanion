import axios from "axios";
import { error } from "console";
import * as fs from "fs-extra";
import { readFileSync } from "fs-extra";
import { AsyncParser } from "json2csv";
import * as JSONC from "jsonc-parser";
import { homedir } from "os";
import path, { dirname } from "path";
import {
  APIData,
  Character,
  config,
  getMutationsStringify,
  RunData,
  SaveData,
  weaponToString,
} from "./constants";
import { getSaveFile } from "./utils";

const debug = false;
let streamKey = "CGHLNRSY8";
let streamId = "76561198163343971";

const saveFile = getSaveFile();
const rawJson = readFileSync(saveFile, "utf-8");
const saveData = JSONC.parse(rawJson) as SaveData;
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
if (!debug) {
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
    .then((response) => {
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
        printJson();
        exportToCsv(path.join(homedir(), "runs.csv"));
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
}
setInterval(main, config.refreshInterval);
function logLastRun(run: RunData) {
  const baseSaveDir = dirname(saveFile);
  const saveDir = path.join(baseSaveDir, streamId);
  const jsonPath = path.join(saveDir, "runs.json");
  if (fs.existsSync(jsonPath)) {
    const q = fs.readJSONSync(jsonPath) as RunData[];
    q.push(run);
    fs.writeJsonSync(jsonPath, q);
  } else {
    fs.mkdirSync(saveDir, { recursive: true });
    const runs = [run];
    fs.writeJSONSync(jsonPath, runs);
  }
}
function printJson() {
  console.log(
    fs.readJSONSync(
      path.join(dirname(saveFile), streamId, "runs.json")
    ) as RunData[]
  );
}
function exportToCsv(out: string) {
  const baseSaveDir = dirname(saveFile);
  const saveDir = path.join(baseSaveDir, streamId);
  const jsonPath = path.join(saveDir, "runs.json");
  const json = fs.createReadStream(jsonPath);
  fs.writeFileSync(jsonPath, "");
  const csv = fs.createWriteStream(out);
  const processor = new AsyncParser().fromInput(json).toOutput(csv);
  processor.promise(false).catch((err) => {
    console.error(err);
  });
}
