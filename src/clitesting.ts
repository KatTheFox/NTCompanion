import axios from "axios";
import { error } from "console";
import * as fs from "fs-extra";
import { readFileSync } from "fs-extra";
import * as JSONC from "jsonc-parser";
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

const debug = true;
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
      if (timestamp !== data.previous.timestamp) {
        timestamp = data.previous.timestamp;
        logLastRun(data.previous);
        printJson();
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
  if (fs.existsSync(path.join(saveDir, "runs.json"))) {
    fs.writeJsonSync(path.join(saveDir, "runs.json"), run, { flag: "a" });
  } else {
    fs.mkdirSync(saveDir, { recursive: true });
    const runs = [run];
    fs.writeJSONSync(path.join(saveDir, "runs.json"), runs);
  }
}
function printJson() {
  console.log(
    fs.readJSONSync(
      path.join(dirname(saveFile), streamId, "runs.json")
    ) as RunData[]
  );
}
