import { readFileSync } from "fs-extra";
import * as JSONC from "jsonc-parser";
import { SaveData } from "./constants";
import { getSaveFile } from "./utils";

const saveFile = getSaveFile();
const rawJson = readFileSync(saveFile, "utf-8");
const saveData = JSONC.parse(rawJson) as SaveData;
