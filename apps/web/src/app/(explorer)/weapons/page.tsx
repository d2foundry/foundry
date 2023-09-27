// import { allDestinyInventoryItems } from "contentlayer/generated";

// import { getDestinyInventoryItems } from "../../api/getInventoryItems";
import {
  getDestinyInventoryItems,
  getDestinyWeapons,
} from "@/lib/database/queries/items";
import { Metadata } from "next";

// const dayInMs =
//   1000 * // second in ms
//   60 * // to minutes
//   60 * // to hours
//   24; // to day

export const metadata: Metadata = {
  title: "weapons // FOUNDRY",
};
export default async function Page() {
  const allDestinyInventoryItems = await getDestinyWeapons();
  return (
    <div>
      <h1>Weapons</h1>
      {allDestinyInventoryItems?.map((v) => (
        <div key={v.hash}>{`${v.displayProperties.name}`}</div>
      ))}
    </div>
  );
}
