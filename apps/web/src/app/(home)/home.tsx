// "use client";
import React from "react";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   ArrowRightIcon,
//   HeartFilledIcon,
//   InfoCircledIcon,
// } from "@radix-ui/react-icons";
import { cn } from "@foundry/ui/utils";

import styles from "./Home.module.scss";
import { BlogSection, ChangelogSection } from "./blog-section";
import { Flex } from "@/components/Flex";

// import { cn } from "@utils/ui";

const SEASON_NAME_TEXT = "Season of the Witch";
const TAGLINE = `Your companion to Destiny 2 weapons and perks.`;

const CURRENT_YEAR_NUMBER = 6;
const CURRENT_SEASON_NUMBER = 22;

// interface HomeProps {
//   allPosts: PostType[];
//   allChangelogPosts: PostType[];
//   // heroImage: {
//   //   src: string;
//   //   blurDataUrl: string;
//   // };
//   trendingWeapons: TrendingWeapons;
//   currentSeasonWeapons: FoundryWeaponSearchItem[];
// }
// const showNightlyAtom = atom(false);

export function Home() {
  // const { weeklyItems, dailyItems } = await getTrendingWeapons();
  return (
    <Flex direction="column">
      <div></div>
      <div className={styles.banner}>
        {/* <Shine /> */}
        <span>{TAGLINE}</span>
      </div>
      <Flex direction="row">
        <BlogSection />
        <ChangelogSection />
      </Flex>
    </Flex>
  );
}
