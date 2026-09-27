const fs = require("fs");
const path = require("path");

const electronRoot = path.join(__dirname, "..");
const repoRoot = path.join(electronRoot, "..", "..");

const standaloneSrc = path.join(repoRoot, "apps", "web", ".next", "standalone");
const nodeSrc = path.join(repoRoot, "tools", "node-v20.18.1-win-x64");

const resourcesDir = path.join(electronRoot, "resources");
const appServerDest = path.join(resourcesDir, "app-server");
const nodeDest = path.join(resourcesDir, "node");

if (!fs.existsSync(standaloneSrc)) {
  console.error(
    `Missing standalone build at ${standaloneSrc}.\nRun "pnpm --filter @foundry/web build" first.`
  );
  process.exit(1);
}

if (!fs.existsSync(path.join(nodeSrc, "node.exe"))) {
  console.error(`Missing portable Node runtime at ${nodeSrc}\\node.exe.`);
  process.exit(1);
}

fs.rmSync(appServerDest, { recursive: true, force: true });
fs.mkdirSync(resourcesDir, { recursive: true });
fs.cpSync(standaloneSrc, appServerDest, { recursive: true });

fs.mkdirSync(nodeDest, { recursive: true });
fs.copyFileSync(path.join(nodeSrc, "node.exe"), path.join(nodeDest, "node.exe"));

console.log("Resources prepared:");
console.log(" -", appServerDest);
console.log(" -", nodeDest);
