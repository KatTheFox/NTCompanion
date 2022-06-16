import axios from "axios";
import { error } from "console";
import {
  existsSync,
  mkdirpSync,
  readFileSync,
  readJsonSync,
  writeJsonSync,
} from "fs-extra";
import * as JSONC from "jsonc-parser";
import path from "path";
import { CurrentRun } from "./api";
import {
  APIData,
  config,
  Config,
  DATADIR,
  getMutationsArray,
  RunData,
  SaveData,
} from "./constants";
import { getSaveDir } from "./utils";

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
const timestamp = 0;
function readConfig() {
  if (existsSync(path.join(DATADIR, "config.json"))) {
    const json = readJsonSync(path.join(DATADIR, "config.json")) as Config;

    Object.assign(config, json);
  } else {
    mkdirpSync(getSaveDir());
    writeConfig();
  }
}
function writeConfig() {
  writeJsonSync(path.join(DATADIR, "config.json"), config);
}
const v: { currentRun: CurrentRun } = {
  currentRun: {
    hp: 0,
    timestamp: 0,
    weapons: { primary: 0, secondary: 0 },
    stage: { world: 0, level: 0 },
    lastHit: 0,
    level: 0,
    character: { type: 0, skin: 0 },
    mutations: [],
  },
};
function mainLoop() {
  axios({
    url: apiUrl,
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      const data = response.data as APIData;
      if (data.current === null) {
        return;
      }
      if (data.current.timestamp !== v.currentRun.timestamp) {
        v.currentRun = convertRun(data.current);
      } else {
        updateRun(v.currentRun, data.current);
      }
    })
    .catch((reason) => {
      error(reason);
    });
}
function main() {
  readConfig();
  setInterval(mainLoop, config.refreshInterval);
}
function convertRun(run: RunData): CurrentRun {
  return {
    hp: run.health,
    timestamp: run.timestamp,
    weapons: { primary: run.wepA, secondary: run.wepB },
    stage: { world: run.world, level: run.level },
    lastHit: run.lasthit,
    level: run.charlvl,
    character: { type: run.char, skin: run.skin },
    mutations: [],
  };
}
function updateRun(current: CurrentRun, run: RunData) {
  const muts = getMutationsArray(run.mutations);
  const excl = muts.filter((val) => !current.mutations.includes(val));
  excl.forEach((val) => {
    current.mutations.push(val);
  });
  current.hp = run.health;
  current.level = run.charlvl;
  current.lastHit = run.lasthit;
  current.stage.world = run.world;
  current.stage.level = run.level;
  current.character.skin = run.skin;
  current.character.type = run.char;
  current.weapons.primary = run.wepA;
  current.weapons.secondary = run.wepB;
}
