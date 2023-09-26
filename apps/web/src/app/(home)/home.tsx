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
import { BlogSection } from "./blog-section";

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

export async function Home() {
  // const { weeklyItems, dailyItems } = await getTrendingWeapons();
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.banner}>
        {/* <Shine /> */}
        <span>{TAGLINE}</span>
      </div>
      <div className={cn(styles.section, styles.padding, styles.maxWidth)}>
        <div className={styles.blogContainer}>
          <BlogSection />
          {/* <BlogSection /> */}
          {/* <Changelog />
          <LinkSection /> */}
        </div>
      </div>
    </div>
  );
}
