const fs = require("fs");
const path = require("path");

const webRoot = path.join(__dirname, "..");
const standaloneAppRoot = path.join(webRoot, ".next", "standalone", "apps", "web");

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

copyDir(path.join(webRoot, ".next", "static"), path.join(standaloneAppRoot, ".next", "static"));
copyDir(path.join(webRoot, "public"), path.join(standaloneAppRoot, "public"));

fs.mkdirSync(path.join(standaloneAppRoot, "src", "lib", "database"), { recursive: true });
fs.copyFileSync(
  path.join(webRoot, "src", "lib", "database", "sqlite.db"),
  path.join(standaloneAppRoot, "src", "lib", "database", "sqlite.db")
);

console.log("Standalone bundle prepared at", standaloneAppRoot);
