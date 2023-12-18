import { SystemStyleObject, defineRecipe } from "@pandacss/dev";

export const baseButtonVariant: Record<string, SystemStyleObject> = {
  solid: {
    bg: "accent.solid",
    color: "white",
    _hover: { bg: "accent.solid.hover" },
    _active: { bg: "accent.solid" },
  },
  secondary: {
    bg: "gray.bg",
    _hover: { bg: "gray.bg.hover" },
    _active: { bg: "gray.bg.active" },
  },
  destructive: {
    borderWidth: "1px",
    borderColor: "danger.border",
    color: "danger.text",
    _hover: { bg: "danger.bg.hover", color: "danger.text.contrast" },
    _active: { bg: "danger.bg.active" },
  },
  subtle: {
    borderWidth: "1px",
    borderColor: "gray.line",
    bg: "gray.bg.subtle",
    _hover: { bg: "gray.bg.hover" },
    _active: { bg: "gray.bg.active" },
  },
  // link: {},
  ghost: {
    _hover: { bg: "gray.bg.hover" },
    _active: { bg: "gray.bg.active" },
  },
  outline: {
    borderWidth: "1px",
    borderColor: "gray.border",
    _hover: { bg: "gray.bg.hover" },
    _active: { bg: "gray.bg.active" },
  },
};

const baseButtonStyles: SystemStyleObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  userSelect: "none",
  transitionProperty: "background, color",
  transitionDuration: "faster",
  transitionTimingFunction: "ease-in",
  rounded: "2",
  color: "gray.text",
  _focusVisible: {
    outline: "0",
    shadow: "focusRing",
  },
};
export const buttonRecipe = defineRecipe({
  className: "button",
  base: baseButtonStyles,
  variants: {
    variant: baseButtonVariant,
    size: {
      sm: { px: "1", textStyle: "button.sm", h: "3" },
      md: { px: "2", textStyle: "button.md", h: "4" },
      lg: { px: "3", textStyle: "button.lg", h: "5" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export const iconButtonRecipe = defineRecipe({
  className: "icon-button",
  base: baseButtonStyles,
  variants: {
    variant: baseButtonVariant,
    size: {
      sm: { h: "3", w: "3" },
      md: { h: "4", w: "4" },
      lg: { h: "5", w: "5" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
