import { MarginProps } from "./helpers/margin-props";
import { styled } from "@foundry/styled-system/jsx";
import { ButtonVariantProps, button } from "@foundry/styled-system/recipes";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = ButtonVariantProps &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const Button = ({
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : styled.button;
  return (
    <Comp {...props} className={button(props)}>
      {children}
    </Comp>
  );
};
