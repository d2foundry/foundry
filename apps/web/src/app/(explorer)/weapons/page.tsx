import { allDestinyInventoryItems } from "contentlayer/generated";

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
  return (
    <div>
      <h1>Weapons</h1>
      {allDestinyInventoryItems.map((v) => (
        <div key={v._id}>{JSON.parse(v.items)}</div>
      ))}
    </div>
  );
}
