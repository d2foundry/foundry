const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const http = require("http");
const net = require("net");

let serverProcess = null;
let mainWindow = null;

function resourcePath(...segments) {
  const base = app.isPackaged
    ? process.resourcesPath
    : path.join(__dirname, "resources");
  return path.join(base, ...segments);
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on("error", reject);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error("Timed out waiting for the Foundry server to start."));
        } else {
          setTimeout(tryOnce, 300);
        }
      });
    };
    tryOnce();
  });
}

async function startServer() {
  const nodeBin = resourcePath("node", "node.exe");
  const serverEntry = resourcePath("app-server", "apps", "web", "server.js");
  const cwd = resourcePath("app-server", "apps", "web");
  const port = await getFreePort();

  serverProcess = spawn(nodeBin, [serverEntry], {
    cwd,
    env: {
      ...process.env,
      PORT: String(port),
      HOSTNAME: "127.0.0.1",
      NODE_ENV: "production",
    },
    windowsHide: true,
  });

  serverProcess.stdout.on("data", (d) => console.log(`[server] ${d}`.trim()));
  serverProcess.stderr.on("data", (d) => console.error(`[server] ${d}`.trim()));
  serverProcess.on("exit", (code) => {
    if (code !== 0 && mainWindow) {
      dialog.showErrorBox("Foundry server stopped", `The local server exited unexpectedly (code ${code}).`);
    }
  });

  const url = `http://127.0.0.1:${port}`;
  await waitForServer(url);
  return url;
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  try {
    const url = await startServer();
    await mainWindow.loadURL(url);
    mainWindow.show();
  } catch (err) {
    dialog.showErrorBox("Foundry failed to start", String(err && err.stack ? err.stack : err));
    app.quit();
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

function stopServer() {
  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill();
    serverProcess = null;
  }
}

app.on("before-quit", stopServer);
process.on("exit", stopServer);
