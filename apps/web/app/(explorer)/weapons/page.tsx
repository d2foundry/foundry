import { Flex } from "@foundry/ui/components";
import { getDestinyWeapons } from "../../../lib/database/queries/items";
import { Metadata } from "next";
import { explorerCategory } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "weapons // FOUNDRY",
};
export default async function Page() {
  const allDestinyWeapons = await getDestinyWeapons();

  const slicedWeapons = allDestinyWeapons?.slice(0, 20) || [];
  return (
    <div>
      <h1>Weapons</h1>
      <Flex>
        <Flex>{explorerCategory.categories?.map((cat) => cat.name)}</Flex>
        <Flex direction="column">
          {slicedWeapons?.map((v) => (
            <div key={v.hash}>{`${v.displayProperties.name}`}</div>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
