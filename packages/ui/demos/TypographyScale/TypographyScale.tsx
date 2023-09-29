import { cn } from "../../utils";

import styles from "./TypographyScale.module.scss";
// interface TypographyScaleProps {}

const specimen = "Sphinx of black quartz, judge my vow.";

const scale = [
  {
    size: 2,
  },
  {
    size: 1.5,
  },
  {
    size: 1.25,
  },
  {
    size: 1,
  },
  { size: 0.875 },
  { size: 0.75 },
];

export const TypographyScale = ({}) => (
  <div className={styles.container}>
    {scale.map(({ size }, i) => {
      const lineHeight = Math.ceil((size * 16 * 1.3) / 8) * 8;
      return (
        <div key={`font-scale${i}`} className={cn(styles.row)}>
          <div>{size}</div>
          <div>{size * 16}</div>
          <div>{lineHeight}</div>
          <p
            className={styles.textSpecimen}
            style={{
              fontSize: `${size}rem`,
              height: `${lineHeight}px`,
            }}
          >
            {specimen}
          </p>
        </div>
      );
    })}
  </div>
);
