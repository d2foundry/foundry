import { MarginProps } from "./helpers/margin-props";
import { styled } from "@foundry/styled-system/jsx";
import {
  IconButtonVariantProps,
  iconButton,
} from "@foundry/styled-system/recipes";
import { Slot } from "@radix-ui/react-slot";

type IconButtonProps = IconButtonVariantProps &
  MarginProps & {
    children?: React.ReactNode;
    asChild?: boolean;
  };

export const IconButton = ({
  asChild = false,
  children,
  ...props
}: IconButtonProps) => {
  const Comp = asChild ? Slot : styled.button;
  return (
    <Comp {...props} className={iconButton(props)}>
      {children}
    </Comp>
  );
};
