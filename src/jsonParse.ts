import axios from "axios";
import { error } from "console";
import { readFileSync } from "fs-extra";
import * as JSONC from "jsonc-parser";
import {
  APIData,
  Character,
  getMutationsStringify,
  SaveData,
  weaponToString,
} from "./constants";
import { getSaveFile } from "./utils";

const debug = false;
const overrideKey = "BLRTVW268";
const overrideID = "76561198166427260";
function main() {
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

  let apiUrl = `http://tb-api.xyz/stream/get?s=${saveData.options.streamid}&key=${saveData.options.streamkey}`;
  if (debug) {
    apiUrl = `http://tb-api.xyz/stream/get?s=${overrideID}&key=${overrideKey}`;
  }
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
    })
    .catch((reason) => {
      console.log(reason);
    });
}
setInterval(main, 1000);
