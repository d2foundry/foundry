import { cn } from "../../utils";

import styles from "./SpacingDemo.module.scss";
// interface SpacingDemoProps {}

const spacingTokens = [
  { token: "--spacing-0-quarter", size: 0.125 },
  { token: "--spacing-0-half", size: 0.25 },
  { token: "--spacing-1", size: 0.5 },
  { token: "--spacing-1-half", size: 0.75 },
  { token: "--spacing-2", size: 1 },
  { token: "--spacing-3", size: 1.5 },
  { token: "--spacing-4", size: 2 },
  { token: "--spacing-5", size: 2.5 },
  { token: "--spacing-6", size: 3 },
  { token: "--spacing-7", size: 3.5 },
  { token: "--spacing-8", size: 4 },
  { token: "--spacing-9", size: 4.5 },
  { token: "--spacing-10", size: 5 },
  { token: "--spacing-12", size: 6 },
  { token: "--spacing-14", size: 7 },
  { token: "--spacing-16", size: 8 },
  { token: "--spacing-18", size: 9 },
  { token: "--spacing-20", size: 10 },
  { token: "--spacing-30", size: 15 },
  { token: "--spacing-40", size: 20 },
];
export const SpacingDemo = ({}) => (
  <div className={styles.list}>
    <div className={cn(styles.listItem, styles.header)}>
      <div>Token</div>
      <div>rem</div>
      <div>px</div>
      <div />
    </div>
    {spacingTokens.map((spacingToken) => (
      <div key={spacingToken.token} className={styles.listItem}>
        <div>
          <code className={styles.tokenName}>{spacingToken.token}</code>
        </div>
        <div>{spacingToken.size}</div>
        <div>{spacingToken.size * 16}</div>
        <div
          className={styles.spacingBar}
          style={{ width: `${spacingToken.size}rem` }}
        />
      </div>
    ))}
  </div>
);
