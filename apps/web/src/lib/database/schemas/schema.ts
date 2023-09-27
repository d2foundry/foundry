import { DestinyInventoryItemDefinition } from "bungie-api-ts/destiny2";
import { integer, text, sqliteTable, blob } from "drizzle-orm/sqlite-core";

export const inventoryItems = sqliteTable("DestinyInventoryItemDefinition", {
  id: integer("id").primaryKey(),
  json: text("json", { mode: "json" })
    .notNull()
    .$type<DestinyInventoryItemDefinition>(),
});

export type InventoryItem = typeof inventoryItems.$inferSelect; // return type when queried
export type InsertInventoryItem = typeof inventoryItems.$inferInsert; // insert type
