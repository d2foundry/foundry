import React from "react";

import { cn } from "@utils/ui";

import styles from "./Textarea.module.scss";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea className={cn(styles.textarea, className)} ref={ref} {...props} />
));
Textarea.displayName = "Textarea";

export { Textarea };
