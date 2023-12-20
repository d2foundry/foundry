"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { cn } from "@foundry/ui/utils";

import styles from "./DocsToc.module.scss";

const DocsToc = ({
  contents,
}: {
  contents?: { slug: string; depth: number; text: string }[];
}) => {
  const [active, setActive] = useState("");

  if (!contents || contents.length <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.stickyContainer}>
        <div className="flex flex-col flex-grow bg-gray-50 overflow-y-auto rounded-lg">
          <div className="flex items-center flex-shrink-0 px-2 pb-8">
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                <h4 className={styles.header}>On this page</h4>
                <ul className={styles.tocList}>
                  {contents.map((item) => (
                    <li key={item.slug}>
                      <Link
                        containerId="layout-scroller"
                        // activeClass={styles.activeItem}
                        // className={`pl-${
                        //   item.depth * 2
                        // } w-full cursor-pointer inline-flex items-center px-3 py-2 text-sm leading-4 font-medium`}
                        className={cn(
                          styles.item,
                          item.slug === active ? styles.activeItem : ""
                        )}
                        to={item.slug}
                        // hashSpy={true}
                        spy={true}
                        onSetActive={(to) => {
                          // console.log("active", to);
                          setActive(to);
                        }}
                        // onSetInactive={(to) => {
                        //   // console.log("inactive", to);
                        // }}
                        ignoreCancelEvents={false}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        // delay={50}
                        isDynamic={true}
                        style={{
                          marginLeft: `var(--spacing-${(item.depth - 1) * 2})`,
                        }}
                      >
                        {/* <svg
                          className={styles.tocIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg> */}
                        {item.text.replace(/`/g, "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DocsToc };
