// const displayValues = ["none", "inline-flex", "flex"] as const;
const directionValues = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
] as const;
const alignValues = ["start", "center", "end", "baseline", "stretch"] as const;
const justifyValues = ["start", "center", "end", "between"] as const;
const wrapValues = ["nowrap", "wrap", "wrap-reverse"] as const;
const gapValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

export function Flex({
  children,
  wrap,
  direction = "row",
  justify = "start",
  align,
  gap = "0",
  ...rest
}: {
  children: React.ReactNode;
  wrap?: (typeof wrapValues)[number];
  direction?: (typeof directionValues)[number];
  justify?: (typeof justifyValues)[number];
  align?: (typeof alignValues)[number];
  gap?: (typeof gapValues)[number];
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      style={{
        ...(rest.style || {}),
        display: "flex",
        flexWrap: wrap,
        flexDirection: direction,
        justifyContent: justify === "between" ? `space-${justify}` : justify,
        alignItems: align,
        gap: `${parseInt(gap) * 8}px`,
      }}
    >
      {children}
    </div>
  );
}
