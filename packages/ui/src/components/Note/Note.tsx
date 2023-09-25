import {
  Cross2Icon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { cn } from "@utils/ui";
import React, { HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import styles from "./Note.module.scss";
import { IconButton } from "@foundry-ui/IconButton";

export const noteVariants = cva(styles.note, {
  variants: {
    variant: {
      default: styles.info,
      destructive: styles.destructive,
      warning: styles.warning,
      success: styles.success,
      info: styles.info,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface NoteProps {
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Note: React.FC<
  HTMLAttributes<HTMLDivElement> & NoteProps & VariantProps<typeof noteVariants>
> = ({ children, className, dismissible, onDismiss, variant, ...props }) => (
  <div className={cn(noteVariants({ variant, className }))} {...props}>
    <div>
      {variant === "warning" ? (
        <ExclamationTriangleIcon />
      ) : (
        <InfoCircledIcon />
      )}
    </div>
    <div>{children}</div>
    {dismissible ? (
      <div className={styles.close}>
        <IconButton
          label="Close"
          onClick={onDismiss}
          tooltip={false}
          variant={variant === "warning" ? variant : "default"}
        >
          <Cross2Icon />
        </IconButton>
      </div>
    ) : null}
  </div>
);
