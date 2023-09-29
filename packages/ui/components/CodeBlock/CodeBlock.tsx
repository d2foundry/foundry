"use client";

import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { cn } from "../../utils";
import { IconButton } from "../IconButton";
import styles from "./CodeBlock.module.scss";

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <span className={styles.copyButtonWrapper}>
      <IconButton
        disabled={isCopied}
        onClick={copy}
        label="Copy to clipboard"
        className={styles.copyButton}
      >
        {isCopied ? <CheckIcon /> : <ClipboardCopyIcon />}
      </IconButton>
    </span>
  );
};
export const CodeBlock: React.FC<
  PropsWithChildren<
    HTMLAttributes<HTMLPreElement> & {
      "data-language": string;
      raw: string;
    }
  >
> = ({ children, raw, className, ...props }) => (
  <pre
    {...props}
    style={{ position: "relative" }}
    className={cn(styles.pre, className)}
  >
    {/* <div className={styles.codeHeader}> */}
    <CopyButton text={raw} />
    {/* </div> */}
    {children}
  </pre>
);
