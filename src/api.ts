import { Character, Enemy, Mutation, Skin, Weapon, World } from "./constants";

export type CurrentRun = {
  hp: number;
  timestamp: number;
  level: number;
  stage: { world: World; level: number };
  character: { type: Character; skin: Skin };
  mutations: Mutation[];
  lastHit: Enemy;
  weapons: { primary: Weapon; secondary: Weapon };
};
