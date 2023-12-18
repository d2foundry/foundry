import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import styles from "./Message.module.scss";
interface MessageProps {
  title: string | React.ReactNode;
  body: string | React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({ title, body }) => (
  <div className={styles.message}>
    <div>
      <InfoCircledIcon />
    </div>
    <div>
      <div className={styles.messageHeader}>{title}</div>
      <div>{body}</div>
    </div>
  </div>
);
