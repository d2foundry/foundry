"server only";
import { notInArray, sql } from "drizzle-orm";
import { db } from "@/lib/database";
import { inventoryItems } from "@/lib/database/schemas/schema";
import { QueryBuilder } from "drizzle-orm/sqlite-core";
import { DestinyInventoryItemDefinition } from "bungie-api-ts/destiny2";

// If we wanted to parse our array type, we could query:

// select data.id, arr.value from data, json_each(data.array) as arr;

// And if we wanted to query a JSON field within json, we could query:

// select id, json_extract(data.json, '$.name') name from data;

// And to query the depTypes array within json:

// select data.id, depType.value from data, json_each(json_extract(data.json, '$.depTypes')) depType;

// SELECT f.*
// FROM Feeds f, json_each(groups) t
// WHERE t.value IN ('fav1', 'fav2')
// GROUP BY f.id
// HAVING COUNT(DISTINCT t.value) = 2;

export const getDestinyInventoryItems = async () => {
  const res = await db.select().from(inventoryItems).limit(10);
  if (!res) {
    return [];
  }
  return res.map((v) => v.json);
};

const extractJson = <T>(path: string) => {
  return sql<T>`json_extract(${inventoryItems.json}, '$.${path}')`;
};

const extractJsonString = (path: string) => {
  return `json_extract(${inventoryItems.json}, '$.${path}')`;
};

// todo... figure out how to type these to item keys

const statement = sql`
  SELECT *
  FROM ${inventoryItems}, json_each(${inventoryItems.json}, '$.itemCategoryHashes') as json
  WHERE json.value LIKE '1'
  LIMIT 10`;

export const getDestinyWeapons = async () => {
  // const res = db.all(statement);
  const res = await db.select().from(inventoryItems);

  // const res = await db
  //   .select({
  //     hash: extractJson<number>("hash"),
  //     name: extractJson<string>("displayProperties.name"),
  //   })
  //   .from(inventoryItems)
  //   .where(sql`${extractJson("itemCategoryHashes")}`);

  if (!res) {
    return [];
  }
  return res
    .map((r) => r.json)
    .filter(
      (item) =>
        item.itemCategoryHashes?.includes(1) &&
        !item.itemCategoryHashes?.includes(3109687656)
    );
};
