/* eslint-disable @typescript-eslint/no-var-requires */

// const {
//   getDestinyManifest,
//   getDestinyManifestSlice,
// } = require("bungie-api-ts/destiny2");

const fs = require("fs");
const path = require("path");
// import { $http } from "/src/common/utils/api/httpClient";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const cacheData = require("memory-cache");

function writeFileSyncRecursive(filename, content, charset) {
  // -- normalize path separator to '/' instead of path.sep,
  // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
  let filepath = filename.replace(/\\/g, "/");

  // -- preparation to allow absolute paths as well
  let root = "";
  if (filepath[0] === "/") {
    root = "/";
    filepath = filepath.slice(1);
  } else if (filepath[1] === ":") {
    root = filepath.slice(0, 3); // c:\
    filepath = filepath.slice(3);
  }

  // -- create folders all the way down
  const folders = filepath.split("/").slice(0, -1); // remove last item, file
  folders.reduce(
    (acc, folder) => {
      const folderPath = acc + folder + "/";
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath;
    },
    root // first 'acc', important
  );

  // -- write file
  fs.writeFileSync(root + filepath, content, charset);
}

async function fetchWithCache(url, options) {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const hours = 24;
    const res = await fetch(url, options);
    const data = await res.json();
    cacheData.put(url, data, hours * 1000 * 60 * 60);
    return data;
  }
}

async function $http(config) {
  const data = await fetchWithCache(config.url, {
    method: config.method,
    headers: {
      "X-API-KEY": process.env.BUNGIE_API_KEY ?? "",
    },
  });
  // const data = await res.json();
  return data;
}

// Cache files are stored inside ./next folder
// const CACHE_PATH = path.join(__dirname, 'globalData.json');
const MANIFEST_CACHE_PATH = "json";
const MANIFEST_CACHE_NAME = "/.d2manifest.json";

// const MANIFEST_CACHE_PATH = ".d2manifest.json";
const CACHE_PATH = path.join(process.cwd(), MANIFEST_CACHE_PATH);

async function fetchManifest() {
  const { getDestinyManifest } = await import("bungie-api-ts/destiny2");
  const data = await getDestinyManifest($http);
  return data.Response;
}

async function getManifestWithCache() {
  let cachedData;

  // #1 - Look for cached data first
  try {
    cachedData = JSON.parse(
      fs.readFileSync(CACHE_PATH + MANIFEST_CACHE_NAME, "utf8")
    );
  } catch (error) {
    console.log("Manifest cache not initialized");
  }

  // #2 - Create Cache file if it doesn't exist
  if (!cachedData) {
    const { getDestinyManifestSlice } = await import("bungie-api-ts/destiny2");
    // Call your APIs to-be-cached here
    const destinyManifest = await fetchManifest();
    const data = await getDestinyManifestSlice($http, {
      destinyManifest,
      tableNames: [
        "DestinyInventoryItemDefinition",
        "DestinyPlugSetDefinition",
        "DestinyStatDefinition",
        "DestinyPowerCapDefinition",
        "DestinyCollectibleDefinition",
        "DestinyStatGroupDefinition",
        "DestinyDamageTypeDefinition",
        "DestinySocketTypeDefinition",
        "DestinySandboxPerkDefinition",
      ],
      language: "en",
    });
    // Store data in cache files
    // this always rewrites/overwrites the previous file
    try {
      writeFileSyncRecursive(
        CACHE_PATH + MANIFEST_CACHE_NAME,
        JSON.stringify(data),
        "utf-8"
      );
      console.log("Wrote to Manifest cache");
    } catch (error) {
      console.log("ERROR WRITING MANIFEST CACHE TO FILE\n", error);
    }

    // cachedData = data;
  }
  // return cachedData;
}

getManifestWithCache()
  .then(() => {
    console.log("done with manifest build");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);

    process.exit(1);
  });
