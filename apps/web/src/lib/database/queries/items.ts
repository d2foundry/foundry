"server only";
import { db } from "@/lib/database";
import { inventoryItems } from "@/lib/database/schemas/schema";

export const getDestinyInventoryItems = async () => {
  const res = await db.select().from(inventoryItems).limit(10);
  if (!res) {
    return [];
  }
  return res.map((v) => v.json);
};

export const getDestinyWeapons = async () => {
  const res = await db.select().from(inventoryItems);
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

export const getDestinyWeaponsByItemType = async () => {
  const res = await getDestinyWeapons();
};
