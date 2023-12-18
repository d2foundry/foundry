import { HTMLStyledProps, splitCssProps } from "@foundry/styled-system/jsx";
import { css } from "@foundry/styled-system/css";
import { styled } from "@foundry/styled-system/jsx";

export function Container({ children, ...props }: HTMLStyledProps<"div">) {
  const [cssProps, restProps] = splitCssProps(props);
  return (
    <styled.div
      {...restProps}
      className={css(
        {
          maxWidth: "8xl",
          marginX: "auto",
          position: "relative",
          px: ["2", "4", "6"],
        },
        cssProps
      )}
    >
      {children}
    </styled.div>
  );
}
