import { MarginProps } from "./helpers/margin-props";
import { styled } from "@foundry/styled-system/jsx";
import { CardVariantProps, card } from "@foundry/styled-system/recipes";
import { Slot } from "@radix-ui/react-slot";

type CardProps = CardVariantProps &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Card = ({ asChild = false, children, ...props }: CardProps) => {
  const Comp = asChild ? Slot : styled.div;
  return (
    <Comp {...props} className={card(props)}>
      {children}
    </Comp>
  );
};
