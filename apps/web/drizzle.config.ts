import type { Config } from "drizzle-kit";

export default {
  out: "./src/lib/database/drizzle",
  schema: "./src/lib/database/schemas/schema.ts",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./src/lib/database/sqlite.db",
  },
} satisfies Config;
