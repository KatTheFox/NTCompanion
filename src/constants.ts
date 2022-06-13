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
  SKELETON = 14,
  FROG = 15,
}
export type SaveData = {
  "VLAMBEER DRM 2013-NOW": string;
  version: string;
  stats: {
    tot_time: number;
    charData_1: CharData;
    charData_2: CharData;
    charData_3: CharData;
    charData_4: CharData;
    charData_5: CharData;
    charData_6: CharData;
    charData_7: CharData;
    charData_8: CharData;
    charData_9: CharData;
    charData_10: CharData;
    charData_11: CharData;
    charData_12: CharData;
    charData_13: CharData;
    charData_14: CharData;
    charData_15: CharData;
    charData_16: CharData;
    charData_17: CharData;
  };
  options: {
    kbkeypick: number;
    ambvol: number;
    borderless: number;
    gamepad: number;
    bintro: number;
    gpkeyfire: number;
    gamepadstyle: number;
    fulscrn: number;
    coop: number;
    sond2d: number;
    sfxvol: number;
    streamkey: string;
    nicedrk: number;
    sideart: number;
    gpkeypick: number;
    kbkeyfire: number;
    mousecp: number;
    kbkeydown: number;
    kbkeyright: number;
    kbkeyspec: number;
    streamid: string;
    gpkeyswap: number;
    crosshair: number;
    shake: number;
    rumble: number;
    gpkeyspec: number;
    lfthand: number;
    kbkeyleft: number;
    kbkeyswap: number;
    niceshd: number;
    fitscrn: number;
    autoaim: number;
    freeze: number;
    timer: number;
    musvol: number;
    nohud: number;
    kbkeyup: number;
    scaling: number;
  };
  data: {
    saveday: number;
    lastarea: number;
    loop_d: number;
    rank_d: number;
    showtutorial: number;
    char_d: number;
    donedaily: number;
    suba_d: number;
    clickeddaily: number;
    checkupdate: number;
    protowep: number;
    hardgot: number;
    area_d: number;
  };
};
export type CharData = {
  cwep: number;
  cbgt: number;
  hbst_area: number;
  hbst_kill: number;
  crowns: number[];
  dbst_area: number;
  dbst_kill: number;
  cbst_race: number;
  cgld: number;
  ctot_hard: number;
  cbst_fast: number;
  ctot_uniq: number;
  dbst_suba: number;
  ctot_loop: number;
  hbst_suba: number;
  cbst_loop: number;
  ctot_runs: number;
  hbst_loop: number;
  ctot_dead: number;
  cbst_suba: number;
  dbst_loop: number;
  startskin: number;
  ctot_wins: number;
  ctot_strk: number;
  ctot_time: number;
  startcrown: number;
  cbst_strk: number;
  ctot_days: number;
  hbst_race: number;
  cgot: number;
  ctot_kill: number;
  dbst_race: number;
  cbst_kill: number;
  cbst_area: number;
};
export type APIData = {
  current: RunData;
  previous: RunData;
};
export enum SKIN {
  A = 0,
  B = 1,
}
export type RunData = {
  /**
   * Which character you are, as a number. The {@link Character} enum is provided for convenience.
   */
  char: Character;
  /**
   *
   */
  lasthit: 15;
  /**
   * Which {@link World} your character is in.
   */
  world: 3;
  /**
   * The current level number. not fully understood yet.
   */
  level: 1;
  /**
   * The {@link Crown} your character is wearing
   */
  crown: 1;
  /**
   * Your character's primary {@link Weapon}
   */
  wepA: 4;
  /**
   * Your character's secondary {@link Weapon}
   */
  wepB: 20;
  /**
   * Which skin your character is wearing
   */
  skin: SKIN;
  ultra: 0;
  /**
   * Your character's level
   */
  charlvl: 4;
  /**
   * How many times you've looped so far
   */
  loops: 0;
  /**
   * Whether you ended the run by sitting on the Nuclear Throne
   */
  win: false;
  /**
   * A string containing a bitmap of {@link Mutation}s.
   */
  mutations: string;
  /**
   * The current kill count
   */
  kills: 86;
  /**
   * The player's current health
   */
  health: number;
  /**
   * The player's steam64 id, used to access the API
   */
  steamid: number;
  /**
   *
   */
  type: "normal";
  /**
   * The UNIX timestamp corresponding to the beginning of the run
   */
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
