import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
// import { spawn } from "node:child_process";
// import fs from "fs/promises";
// import { existsSync, mkdirSync } from "node:fs";
// import {f} from "@foundry/search"

// import { makeSource } from "contentlayer/source-remote-files";
// import {
//   MANIFEST_SLICES,
//   fetchManifest,
//   getManifest,
// } from "./src/lib/api/destinyManifest";

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
  },
}));

const ExplorerCategory = defineNestedType(() => ({
  name: "ExplorerCategory",
  contentType: "data",
  fields: {
    name: { type: "string", required: true },
    slug: { type: "string", required: true },
    count: { type: "number" },
    parent: { type: "string" },
  },
}));

const ExplorerCategories = defineDocumentType(() => ({
  name: "ExplorerCategories",
  filePathPattern: `explorer/categories.json`,
  isSingleton: true,
  contentType: "data",
  fields: {
    categories: {
      type: "list",
      of: ExplorerCategory,
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    author: { type: "nested", of: Author },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace(/posts\/?/, ""),
    },
  },
}));

export const ChangelogPost = defineDocumentType(() => ({
  name: "Changelog",
  filePathPattern: `changelog/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    author: { type: "nested", of: Author },
    slug: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace(/changelog\/?/, ""),
    },
  },
}));

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};
export const DesignDoc = defineDocumentType(() => ({
  name: "DesignDoc",
  filePathPattern: `design/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: computedFields,
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: computedFields,
}));

// const API_SYNC_INTERVAL = 1000 * 60 * 60;
// const syncContentFromApi = async (contentDir: string) => {
//   const syncRun = async () => {
//     const destinyDefs = await getManifest();

//     const tables = Object.keys(destinyDefs);
//     tables.forEach((table) => {
//       if (!existsSync(`content/synced/d2/${table}`)) {
//         mkdirSync(`content/synced/d2/${table}`, { recursive: true });
//       }
//     });

//     await Promise.all(
//       Object.entries(destinyDefs).flatMap(([table, v]) => {
//         const values = Object.entries(v);
//         return values.map(([id, def]) =>
//           fs.writeFile(
//             `content/synced/d2/${table}/${id}.json`,
//             JSON.stringify(def)
//           )
//         );
//       })
//     );
//   };

//   let wasCancelled = false;
//   let syncInterval;
//   if (!existsSync(`content/synced/d2/`)) {
//     mkdirSync(`content/synced/d2`);
//   }

//   try {
//     const currentVersion = await fs.readFile("content/synced/d2/version.txt", {
//       encoding: "utf8",
//     });
//     const manifest = await fetchManifest();

//     if (manifest.version === currentVersion) {
//       console.log("up-to-date manifest found, skipping sync");
//       return () => {
//         wasCancelled = true;
//         clearTimeout(syncInterval);
//       };
//     } else {
//       await fs.writeFile("content/synced/d2/version.txt", manifest.version, {
//         encoding: "utf8",
//       });
//     }
//   } catch {
//     console.log("error");
//   }

//   const syncLoop = async () => {
//     console.log("Syncing content files from api");

//     await syncRun();

//     if (wasCancelled) return;
//     console.log("synced !");
//     syncInterval = setTimeout(syncLoop, API_SYNC_INTERVAL);
//   };

//   // Block until the first sync is done
//   await syncLoop();

//   return () => {
//     wasCancelled = true;
//     clearTimeout(syncInterval);
//   };
// };

// const runBashCommand = (command: string) =>
//   new Promise((resolve, reject) => {
//     const child = spawn(command, [], { shell: true });

//     child.stdout.setEncoding("utf8");
//     child.stdout.on("data", (data) => process.stdout.write(data));

//     child.stderr.setEncoding("utf8");
//     child.stderr.on("data", (data) => process.stderr.write(data));

//     child.on("close", function (code) {
//       if (code === 0) {
//         resolve(void 0);
//       } else {
//         reject(new Error(`Command failed with exit code ${code}`));
//       }
//     });
//   });

export default makeSource({
  // syncFiles: syncContentFromApi,
  contentDirPath: "content",
  disableImportAliasWarning: true,
  documentTypes: [
    Post,
    ChangelogPost,
    DesignDoc,
    Doc,
    ExplorerCategories,
    // DestinyInventoryItemDefinition,
  ],
});
