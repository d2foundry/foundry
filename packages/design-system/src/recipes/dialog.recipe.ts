import { defineRecipe, defineSlotRecipe } from "@pandacss/dev";

export const dialogOverlay = defineRecipe({
  className: "dialogOverlay",
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pos: "fixed",
    inset: "0",
    zIndex: "dialog.backdrop",
    bg: "black.a9",
    px: "4",
    py: "4",
    animationDuration: "token(durations.fast)",
    animationTimingFunction: "token(easings.in)",
    "&[data-state=open]": {
      animationName: "fadein",
    },
    "&[data-state=closed]": {
      animationName: "fadeout",
    },
  },
});

export const dialogContent = defineRecipe({
  className: "dialogContent",
  base: {
    w: "full",
    rounded: "3",
    maxW: "breakpoint-sm",
    zIndex: "dialog",
    bg: "gray.bg",
    shadow: "lg",
    padding: "4",
    pos: "relative",
    color: "gray.text.contrast",
    animationDuration: "token(durations.fast)",
    animationTimingFunction: "token(easings.in)",
    "&[data-state=open]": {
      animationName: "fadein",
    },
    "&[data-state=closed]": {
      animationName: "fadeout",
    },
  },
  staticCss: ["*"],
});

export const dialogClose = defineRecipe({
  className: "dialogClose",
  base: {
    position: "absolute",
    top: "3",
    right: "3",
  },
});
