"use client";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

import { cn, copyToClipboard } from "../../utils";

import styles from "./ColorPalette.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";

interface ColorPaletteProps {
  colors: { token: string; label: string }[];
  label: string;
  light?: boolean;
  alpha?: boolean;
}

function getRGB(token: string) {
  const elem = document.createElement("div");
  elem.style.display = "none";
  elem.style.color = token;
  document.body.appendChild(elem);
  return window.getComputedStyle(elem, null).getPropertyValue("color");
}

const ColorCard = ({
  token,
  onClick,
  alpha,
}: {
  token: string;
  onClick: () => void;
  alpha?: boolean;
}) => {
  const [hex, setHex] = useState("");
  const [copied, setCopied] = useState(false);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRgb = getRGB(token);
      setHex(newRgb);
    }
  }, [token]);

  useEffect(() => {
    if (copied) {
      // setAdded(true);
      // prevCount.current = items.length;
      timerRef.current = setTimeout(() => setCopied(false), 3000);
    }

    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, [copied]);

  const handleClick = () => {
    onClick();
    setCopied(true);
  };

  return (
    <button
      aria-hidden="true"
      onClick={handleClick}
      className={cn(styles.colorCard, alpha ? styles.alpha : "")}
    >
      <div
        className={styles.colorCardChip}
        style={{
          background: `${token}`,
        }}
      />
      <div>
        <p className={styles.tokenName}>
          {token}

          <span
            className={styles.checkIcon}
            style={{ opacity: copied ? 1 : 0 }}
          >
            <CheckIcon height={20} width={20} />
          </span>
        </p>
        <p>{hex}</p>
      </div>
    </button>
  );
};

export const ColorCardList: React.FC<Omit<ColorPaletteProps, "label">> = ({
  colors,
  light,
  alpha,
}) => {
  const handleChipClick = (token: string) => {
    copyToClipboard(token);
  };
  return (
    <div className={cn(styles.cardList, light ? "light" : "")}>
      {colors.map((color) => (
        <ColorCard
          alpha={alpha}
          token={color.token}
          key={color.label}
          onClick={() => handleChipClick(color.token)}
        />
      ))}
    </div>
  );
};

const ColorChip = ({
  token,
  onClick,
  alpha,
}: {
  token: string;
  onClick: () => void;
  alpha?: boolean;
}) => (
  <div
    aria-hidden="true"
    onClick={onClick}
    className={cn(styles.chip, alpha ? styles.alpha : "")}
  >
    <div
      style={{
        background: `${token}`,
      }}
    />
  </div>
);

export const PaletteGrid: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.grid}>
    <div className={styles.palette}>
      <div></div>
      <div className={styles.row}>
        {Array(12)
          .fill("")
          .map((_, i) => (
            <div key={`color-grid-header-${i}`}>{i + 1}</div>
          ))}
      </div>
    </div>
    {children}
  </div>
);

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  light,
  alpha,
  label,
}) => {
  const handleChipClick = (token: string) => {
    copyToClipboard(token);
  };
  return (
    <div className={styles.palette}>
      <span>{label}</span>
      <div className={cn(styles.row, light ? "light" : "")}>
        {colors.map((color) => (
          <ColorChip
            alpha={alpha}
            token={color.token}
            key={color.label}
            onClick={() => handleChipClick(color.token)}
          />
        ))}
      </div>
    </div>
  );
};
