import axios from "axios";
import { error } from "console";
import { readFileSync } from "fs-extra";
import * as JSONC from "jsonc-parser";
import { APIData, SaveData } from "./constants";
import { getSaveFile } from "./utils";
async function main() {
  const saveFile = getSaveFile();
  const rawJson = readFileSync(saveFile, "utf-8");
  const saveData = JSONC.parse(rawJson) as SaveData;
  if (saveData.options.streamkey == null) {
    error(
      "No stream key found! please enable stream key in Nuclear THrone's settings, then restart this program"
    );
  }
  if (saveData.options.streamid == null) {
    error(
      "It looks like you're playing on a non-steam version of Nuclear Throne. The Nuclear Throne API requires you to be playing on the Steam version."
    );
  }
  const apiUrl = `http://tb-api.xyz/stream/get?s=${saveData.options.streamid}&key=${saveData.options.streamkey}`;
  const response = await axios({
    method: "get",
    url: apiUrl,
    responseType: "json",
  });
  const data = response.data as APIData;
  console.log(data);
}
main();
