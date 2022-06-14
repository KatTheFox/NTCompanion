import * as fs from "fs-extra";
import os from "os";
import path from "path";

export function getDefaultSaveDir(): string | undefined {
  const home = os.homedir();
  switch (os.platform()) {
    case "win32":
      return path.join(home, "AppData", "Local", "nuclearthrone");
    case "linux":
      return path.join(home, ".config", "nuclearthrone");
    case "darwin":
      return path.join(
        home,
        "Library",
        "Application",
        "Support",
        "com.vlambeer.nuclearthrone"
      );
    default:
      return undefined;
  }
}
export function getSaveFile(): string {
  const defaultDir = getDefaultSaveDir();
  if (defaultDir === undefined) {
    return promptUserForSaveFile();
  }
  if (fs.existsSync(path.join(defaultDir, "nuclearthrone.sav"))) {
    return path.join(defaultDir, "nuclearthrone.sav");
  }
  if (fs.existsSync(path.join(defaultDir, "NuclearThrone.sav"))) {
    return path.join(defaultDir, "NuclearThrone.sav");
  }
  return promptUserForSaveFile();
}

function promptUserForSaveFile(): string {
  return ""; // todo
}
