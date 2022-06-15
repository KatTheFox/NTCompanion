export enum Character {
  FISH = 1,
  CRYSTAL = 2,
  EYES = 3,
  MELTING = 4,
  PLANT = 5,
  YV = 6,
  STEROIDS = 7,
  ROBOT = 8,
  CHICKEN = 9,
  REBEL = 10,
  HORROR = 11,
  ROGUE = 12,
  BIGDOG = 13,
  SKELETON = 14,
  FROG = 15,
}
export type SaveData = {
  /** A message about how YV will shank you if you edit the savedata file. */
  "VLAMBEER DRM 2013-NOW": string;
  /** Game version. */
  version: string;
  /** Various stats. */
  stats: {
    /** Total playtime. */
    tot_time: number;
    /** Data for Fish. */
    charData_1: CharData;
    /** Data for Crystal. */

    charData_2: CharData;
    /** Data for Eyes. */
    charData_3: CharData;
    /** Data for Melting. */
    charData_4: CharData;
    /** Data for Plant. */
    charData_5: CharData;
    /** Data for YV. */
    charData_6: CharData;
    /** Data for Steroids. */
    charData_7: CharData;
    /** Data for Robot. */
    charData_8: CharData;
    /** Data for Chicken. */
    charData_9: CharData;
    /** Data for Rebel. */
    charData_10: CharData;
    /** Data for Horror. */
    charData_11: CharData;
    /** Data for Rogue. */
    charData_12: CharData;
    /** Data for Big Dog. */
    charData_13: CharData;
    /** Data for Skeleton. */
    charData_14: CharData;
    /** Data for Frog. */
    charData_15: CharData;
    /** Data for Cuz. */
    charData_16: CharData;
    /** Unknown. */
    charData_17: CharData;
  };
  /** Settings and preferences. */
  options: {
    /** Not sure what this is. */
    kbkeypick: number;
    /** Ambiance Volume (0.00 - 1.00). */
    ambvol: number;
    /** Borderless Fullscreen (0 = Off, 1 = On). */
    borderless: number;
    /** Gamepad Enabled (0 = Off, 1 = On). */
    gamepad: number;
    /** Boss Intros (0 = Off, 1 = On). */
    bintro: number;
    /** Keybind for firing, on a gamepad. */
    gpkeyfire: number;
    /** Controller Selection (X-Box or Playstation) (1, 2). */
    gamepadstyle: number;
    /** Full Screen (0 = Off, 1 = On). */
    fulscrn: number;
    /** Co-op Mode (0 = Off, 1 = On). */
    coop: number;
    /** Whether 3d sound is enabled. */
    sond2d: number;
    /** Sound Effects Volume (0.00 - 1.00) . */
    sfxvol: number;
    /** The stream key used to access the NT API. */
    streamkey: string;
    /** Nice Darkness (0 = Off, 1 = On). */
    nicedrk: number;
    /** Sideart Selection (1, 2, 3, 4, 5, 6, 7, 8). */
    sideart: number;
    /** Not sure what this is. */
    gpkeypick: number;
    /** The keybind to fire on a keyboard. */
    kbkeyfire: number;
    /** Mouse Capture (0 = Off, 1 = On). */
    mousecp: number;
    /** *Not sure what this is. */
    kbkeydown: number;
    /** *Not sure what this is. */
    kbkeyright: number;
    /** Not sure what this is. */
    kbkeyspec: number;
    /** The player's 64-bit steam id, used to access the NT API. */
    streamid: string;
    /** Not sure what this is. */
    gpkeyswap: number;
    /** Crosshair Style (1, 2, 3, 4, 5, 6, 7, 8). */
    crosshair: number;
    /** Screenshake (0.00 - 2.00). */
    shake: number;
    /** Controller rumble. */
    rumble: number;
    /** Not sure what this is. */
    gpkeyspec: number;
    /** WHether left-handed mode should be enabled. */
    lfthand: number;
    /** Not sure what this is, maybe the active ability button. */
    kbkeyleft: number;
    /** Keybind to swap weapons on a keyboard. */
    kbkeyswap: number;
    /** Nice Shadows (0 = Off, 1 = On). */
    niceshd: number;
    /** Not sure what this is, seems to be resolution related. */
    fitscrn: number;
    /** Gamepad Autoaim (0.00 - 1.00). */
    autoaim: number;
    /** Freeze Frames (0.00 - 1.00). */
    freeze: number;
    /** Whether the speedrun timer should be shown (0 = Off, 1 = On). */
    timer: number;
    /** Music Volume (0.00 - 1.00). */
    musvol: number;
    /** Hide HUD (0 = Off, 1 = On). */
    nohud: number;
    /** Not sure what this is. */
    kbkeyup: number;
    /** Window Scaling (1 = 1x, 2 = 2x, 3 = 3x, 4 = 4x). */
    scaling: number;
  };
  /** Character-nonspecific data. */
  data: {
    /** The date the save data was last updated. */
    saveday: number;
    /** The last area you went to. */
    lastarea: number;
    /** Daily loop count. */
    loop_d: number;
    /** Daily rank. */
    rank_d: number;
    /** Whether the tutorial should be shown. */
    showtutorial: number;
    /** Which character you used for the daily. */
    char_d: Character;
    /** Whether you've completed the daily. */
    donedaily: number;
    /** Unknown, possibly which sub-area you visited last in the daily?. */
    suba_d: number;
    /** Whether you've clicked the daily option in the main menu. */
    clickeddaily: number;
    /** Whether the game should check for updates. */
    checkupdate: number;
    /** Which {@link Weapon} you left in the proto chest last. */
    protowep: number;
    /** Whether hard mode is unlocked. */
    hardgot: number;
    /** The last area you went to in the daily. */
    area_d: number;
  };
};
export type CharData = {
  /** Primary weapon, broken as of U95. */
  cwep: number;
  cbgt: number;
  hbst_area: number;
  hbst_kill: number;
  /**
   * Which {@link Crown}s you have unlocked. 0=locked,1=unlocked, in the following order:
   * None,Random,Death,Life,Haste,Guns,Hatred,Blood,Destiny,Love,Risk,Curses,Luck,Protection. .
   */
  crowns: number[];
  dbst_area: number;
  dbst_kill: number;
  cbst_race: number;
  /** Which golden {@link Weapon} you have for this character. */
  cgld: number;
  ctot_hard: number;
  cbst_fast: number;
  ctot_uniq: number;
  dbst_suba: number;
  /** *Total amount of loops. */
  ctot_loop: number;
  hbst_suba: number;
  cbst_loop: number;
  ctot_runs: number;
  hbst_loop: number;
  /** Total amount of deaths. */
  ctot_dead: number;
  cbst_suba: number;
  dbst_loop: number;
  /** Which {@link Skin} you're currently using. */
  startskin: Skin;
  /** Total amount of wins. */
  ctot_wins: number;
  /** Current streak. */
  ctot_strk: number;
  /** Total amount of deaths. */
  ctot_time: number;
  /** Which {@link Crown} you start with. */
  startcrown: Crown;
  /** *Highest streak. */
  cbst_strk: number;
  ctot_days: number;
  hbst_race: number;
  /** *Character unlocked? (0 = No, 1 = Yes). */
  cgot: number;
  ctot_kill: number;
  dbst_race: number;
  /** Your highest killcount with this character. */
  cbst_kill: number;
  /** The highest area you've ever been to with this character . */
  cbst_area: number;
};
export type APIData = {
  current: RunData;
  previous: RunData;
};
export enum Skin {
  A = 0,
  B = 1,
}
export type RunData = {
  /**
   * Which character you are, as a number. The {@link Character} enum is provided for convenience. .
   */
  char: Character;
  /** Which {@link Enemy} last hit the player. */
  lasthit: Enemy;
  /** Which {@link World} your character is in. */
  world: World;
  /** The current level number. Not fully understood yet. */
  level: number;
  /** The {@link Crown} your character is wearing. */
  crown: Crown;
  /** Your character's primary {@link Weapon}. */
  wepA: Weapon;
  /** Your character's secondary {@link Weapon}. */
  wepB: Weapon;
  /** Which skin your character is wearing. */
  skin: Skin;
  /** Which Ultra Mutation you picked. */
  ultra: Ultra;
  /** Your character's level. */
  charlvl: number;
  /** How many times you've looped so far. */
  loops: number;
  /** Whether you ended the run by sitting on the Nuclear Throne. */
  win: boolean;
  /** A string containing a bitmap of {@link Mutation}s. */
  mutations: string;
  /** The current kill count. */
  kills: number;
  /** The player's current health. */
  health: number;
  /** The player's steam64 id, used to access the API. */
  steamid: number;
  /** The {@link RunType} of the run. */
  type: RunType;
  /** The UNIX timestamp corresponding to the beginning of the run. */
  timestamp: number;
};
export enum Mutation {
  HEAVYHEART = 1 << 0,
  RHINOSKIN = 1 << 1,
  EXTRAFEET = 1 << 2,
  PLUTONIUMHUNGER = 1 << 3,
  RABBITPAW = 1 << 4,
  THRONEBUTT = 1 << 5,
  LUCKYSHOT = 1 << 6,
  BLOODLUST = 1 << 7,
  GAMMAGUTS = 1 << 8,
  SECONDSTOMACH = 1 << 9,
  BACKMUSCLE = 1 << 10,
  SCARIERFACE = 1 << 11,
  EUPHORIA = 1 << 12,
  LONGARMS = 1 << 13,
  BOILINGVEINS = 1 << 14,
  SHOTGUNSHOULDERS = 1 << 15,
  RECYCLEGLAND = 1 << 16,
  LASERBRAIN = 1 << 17,
  LASTWISH = 1 << 18,
  EAGLEEYES = 1 << 19,
  IMPACTWRISTS = 1 << 20,
  BOLTMARROW = 1 << 21,
  STRESS = 1 << 22,
  TRIGGERFINGERS = 1 << 23,
  SHARPTEETH = 1 << 24,
  PATIENCE = 1 << 25,
  HAMMERHEAD = 1 << 26,
  STRONGSPIRIT = 1 << 27,
  OPENMIND = 1 << 28,
}
export function hasflag(flags: number, flagToCheck: number): boolean {
  if ((flags & flagToCheck) === flagToCheck) {
    return true;
  }

  return false;
}
export function hasMutation(mutation: Mutation, mutations: string): boolean {
  const mutationsRev = mutations;
  return mutationsRev[Math.log2(mutation)] === "1";
}
export function getMutations(mutations: string): Set<Mutation> {
  const r = new Set<Mutation>();
  for (const k of Object.values(Mutation)) {
    if (typeof k === "string") {
      continue;
    }
    if (hasMutation(k, mutations)) {
      r.add(k);
    }
  }
  return r;
}
export function weaponToString(weapon: Weapon): string | undefined {
  return Weapon[weapon];
}
export function getMutationsStringify(mutations: string): Set<string> {
  const r = new Set<string>();
  for (const k of Object.values(Mutation)) {
    if (typeof k === "string") {
      continue;
    }
    if (hasMutation(k, mutations)) {
      const mut = Mutation[k];
      if (mut === undefined) {
        console.log(`undefined mutation at${k}`);
        continue;
      }
      r.add(mut);
    }
  }
  return r;
}
export function mutationToString(mutation: Mutation): string | undefined {
  return Mutation[mutation];
}
export enum Crown {
  NONE = 1,
  DEATH = 2,
  LIFE = 3,
  HASTE = 4,
  GUNS = 5,
  HATRED = 6,
  BLOOD = 7,
  DESTINY = 8,
  LOVE = 9,
  LUCK = 10,
  CURSES = 11,
  RISK = 12,
  PROTECTION = 13,
}
export enum World {
  CROWNVAULT = 100,
  DESERT = 1,
  OASIS = 101,
  SEWERS = 2,
  PIZZASEWERS = 102,
  SCRAPYARD = 3,
  YVSMANSION = 103,
  CRYSTALCAVES = 4,
  CURSEDCRYSTALCAVES = 104,
  FROZENCITY = 5,
  JUNGLE = 105,
  LABS = 6,
  THEPALACE = 7,
  CAMPFIRE = 0,
  YVSCRIB = 107,
  IDPDHEADQUARTERS = 106,
}
export enum Weapon {
  NOTHING = 0,
  REVOLVER = 1,
  TRIPLEMACHINEGUN = 2,
  WRENCH = 3,
  MACHINEGUN = 4,
  SHOTGUN = 5,
  CROSSBOW = 6,
  GRENADELAUNCHER = 7,
  DOUBLESHOTGUN = 8,
  MINIGUN = 9,
  AUTOSHOTGUN = 10,
  AUTOCROSSBOW = 11,
  SUPERCROSSBOW = 12,
  SHOVEL = 13,
  BAZOOKA = 14,
  STICKYLAUNCHER = 15,
  SMG = 16,
  ASSAULTRIFLE = 17,
  DISCGUN = 18,
  LASERPISTOL = 19,
  LASERRIFLE = 20,
  SLUGGER = 21,
  GATLINGSLUGGER = 22,
  ASSAULTSLUGGER = 23,
  ENERGYSWORD = 24,
  SUPERSLUGGER = 25,
  HYPERRIFLE = 26,
  SCREWDRIVER = 27,
  LASERMINIGUN = 28,
  BLOODLAUNCHER = 29,
  SPLINTERGUN = 30,
  TOXICBOW = 31,
  SENTRYGUN = 32,
  WAVEGUN = 33,
  PLASMAGUN = 34,
  PLASMACANNON = 35,
  ENERGYHAMMER = 36,
  JACKHAMMER = 37,
  FLAKCANNON = 38,
  GOLDENREVOLVER = 39,
  GOLDENWRENCH = 40,
  GOLDENMACHINEGUN = 41,
  GOLDENSHOTGUN = 42,
  GOLDENCROSSBOW = 43,
  GOLDENGRENADELAUNCHER = 44,
  GOLDENLASERPISTOL = 45,
  CHICKENSWORD = 46,
  NUKELAUNCHER = 47,
  IONCANNON = 48,
  QUADRUPLEMACHINEGUN = 49,
  FLAMETHROWER = 50,
  DRAGON = 51,
  FLAREGUN = 52,
  ENERGYSCREWDRIVER = 53,
  HYPERLAUNCHER = 54,
  LASERCANNON = 55,
  RUSTYREVOLVER = 56,
  LIGHTNINGPISTOL = 57,
  LIGHTNINGRIFLE = 58,
  LIGHTNINGSHOTGUN = 59,
  SUPERFLAKCANNON = 60,
  SAWEDOFFSHOTGUN = 61,
  SPLINTERPISTOL = 62,
  SUPERSPLINTERGUN = 63,
  LIGHTINGSMG = 64,
  SMARTGUN = 65,
  HEAVYCROSSBOW = 66,
  BLOODHAMMER = 67,
  LIGHTNINGCANNON = 68,
  POPGUN = 69,
  PLASMARIFLE = 70,
  POPRIFLE = 71,
  TOXICLAUNCHER = 72,
  FLAMECANNON = 73,
  LIGHTNINGHAMMER = 74,
  FLAMESHOTGUN = 75,
  DOUBLEFLAMESHOTGUN = 76,
  AUTOFLAMESHOTGUN = 77,
  CLUSTERLAUNCHER = 78,
  GRENADESHOTGUN = 79,
  GRENADERIFLE = 80,
  ROGUERIFLE = 81,
  PARTYGUN = 82,
  DOUBLEMINIGUN = 83,
  GATLINGBAZOOKA = 84,
  AUTOGRENADESHOTGUN = 85,
  ULTRAREVOLVER = 86,
  ULTRALASERPISTOL = 87,
  SLEDGEHAMMER = 88,
  HEAVYREVOLVER = 89,
  HEAVYMACHINEGUN = 90,
  HEAVYSLUGGER = 91,
  ULTRASHOVEL = 92,
  ULTRASHOTGUN = 93,
  ULTRACROSSBOW = 94,
  ULTRAGRENADELAUNCHER = 95,
  PLASMAMINIGUN = 96,
  DEVASTATOR = 97,
  GOLDENPLASMAGUN = 98,
  GOLDENSLUGGER = 99,
  GOLDENSPLINTERGUN = 100,
  GOLDENSCREWDRIVER = 101,
  GOLDENBAZOOKA = 102,
  GOLDENASSAULTRIFLE = 103,
  SUPERDISCGUN = 104,
  HEAVYAUTOCROSSBOW = 105,
  HEAVYASSAULTRIFLE = 106,
  BLOODCANNON = 107,
  DOGSPINATTACK = 108,
  DOGMISSILE = 109,
  INCINERATOR = 110,
  SUPERPLASMACANNON = 111,
  SEEKERPISTOL = 112,
  SEEKERSHOTGUN = 113,
  ERASER = 114,
  GUITAR = 115,
  BOUNCERSMG = 116,
  BOUNCERSHOTGUN = 117,
  HYPERSLUGGER = 118,
  SUPERBAZOOKA = 119,
  FROGPISTOL = 120,
  BLACKSWORD = 121,
  GOLDENNUKELAUNCHER = 122,
  GOLDENDISCGUN = 123,
  HEAVYGRENADELAUNCHER = 124,
  GUNGUN = 125,
  GOLDENFROGPISTOL = 201,
}
export enum RunType {
  NORMAL = "normal",
  DAILY = "daily",
  WEEKLY = "weekly",
  HARD = "hard",
}
export enum Ultra {
  NONE = 0,
  LEFTMOST = 1,
  SECOND = 2,
  THIRD = 3,
}
export enum Enemy {
  NOTHING = -1,
  BANDIT = 0,
  MAGGOT = 1,
  RADMAGGOT = 2,
  BIGMAGGOT = 3,
  SCORPION = 4,
  GOLDSCORPION = 5,
  BIGBANDIT = 6,
  RAT = 7,
  RATKING = 8,
  GREENRAT = 9,
  GATOR = 10,
  EXPLODER = 11,
  TOXICFROG = 12,
  MOM = 13,
  ASSASSIN = 14,
  RAVEN = 15,
  SALAMANDER = 16,
  SNIPER = 17,
  BIGDOG = 18,
  SPIDER = 19,
  NOTYETIMPLEMENTED = 20,
  LASERCRYSTAL = 21,
  HYPERCRYSTAL = 22,
  SNOWBANDIT = 23,
  SNOWBOT = 24,
  WOLF = 25,
  SNOWTANK = 26,
  LILHUNTER = 27,
  FREAK = 28,
  EXPLOFREAK = 29,
  RHINOFREAK = 30,
  NECROMANCER = 31,
  TURRET = 32,
  TECHNOMANCER = 33,
  GUARDIAN = 34,
  EXPLOGUARDIAN = 35,
  DOGGUARDIAN = 36,
  THRONE = 37,
  THRONEII = 38,
  BONEFISH = 39,
  CRAB = 40,
  TURTLE = 41,
  VENUSGRUNT = 42,
  VENUSSARGE = 43,
  FIREBALLER = 44,
  SUPERFIREBALLER = 45,
  JOCK = 46,
  CURSEDSPIDER = 47,
  CURSEDCRYSTAL = 48,
  MIMIC = 49,
  HEALTHMIMIC = 50,
  GRUNT = 51,
  INSPECTOR = 52,
  SHIELDER = 53,
  CROWNGUARDIAN = 54,
  EXPLOSION = 55,
  SMALLEXPLOSION = 56,
  FIRETRAP = 57,
  SHIELD = 58,
  TOXIN = 59,
  HORROR = 60,
  BARREL = 61,
  TOXICBARREL = 62,
  GOLDENBARREL = 63,
  CAR = 64,
  VENUSCAR = 65,
  VENUSCARFIXED = 66,
  VENUZCAR2 = 67,
  ICYCAR = 68,
  THROWNCAR = 69,
  MINE = 70,
  CROWNOFDEATH = 71,
  ROGUESTRIKE = 72,
  BLOODLAUNCHER = 73,
  BLOODCANNON = 74,
  BLOODHAMMER = 75,
  DISC = 76,
  CURSEEAT = 77,
  BIGDOGMISSILE = 78,
  HALLOWEENBANDIT = 79,
  LILHUNTERFLY = 80,
  THRONEDEATH = 81,
  JUNGLEBANDIT = 82,
  JUNGLEASSASSIN = 83,
  JUNGLEFLY = 84,
  CROWNOFHATRED = 85,
  ICEFLOWER = 86,
  CURSEDAMMOPICKUP = 87,
  UNDERWATERLIGHTNING = 88,
  ELITEGRUNT = 89,
  BLOODGAMBLE = 90,
  ELITESHIELDER = 91,
  ELITEINSPECTOR = 92,
  CAPTAIN = 93,
  VAN = 94,
  BUFFGATOR = 95,
  GENERATOR = 96,
  LIGHTNINGCRYSTAL = 97,
  GOLDENSNOWTANK = 98,
  GREENEXPLOSION = 99,
  SMALLGENERATOR = 100,
  GOLDENDISC = 101,
  BIGDOGEXPLOSION = 102,
  IDPDFREAK = 103,
  THRONEIIDEATH = 104,
  NOTYETIMPLEMENTED2 = 105,
}
type Config = {
  refreshInterval: number;
};
export const config: Config = {
  refreshInterval: 5000,
};
