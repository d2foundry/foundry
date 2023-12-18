import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
  navigation: { value: "400" },
  drawer: { DEFAULT: { value: "700" }, backdrop: { value: "650" } },
  dialog: { DEFAULT: { value: "800" }, backdrop: { value: "750" } },
  dropdown: { value: "900" },
  popover: { value: "950" },
  tooltip: { value: "1000" },
});
