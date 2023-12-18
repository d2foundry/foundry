import { RecipeConfig } from "@pandacss/types";
import { headingRecipe } from "./heading.recipe";
import { textRecipe } from "./text.recipe";
import { cardRecipe } from "./card.recipe";
import { dialogClose, dialogContent, dialogOverlay } from "./dialog.recipe";
import { linkRecipe } from "./link.recipe";
import { buttonRecipe, iconButtonRecipe } from "./button.recipe";
import { inputRecipe } from "./input.recipe";
import { textareaRecipe } from "./textarea.recipe";
import { separatorRecipe } from "./separator.recipe";
import { badgeRecipe } from "./badge.recipe";

export const recipes: Record<string, RecipeConfig> = {
  heading: headingRecipe,
  text: textRecipe,
  badge: badgeRecipe,
  card: cardRecipe,
  link: linkRecipe,
  button: buttonRecipe,
  input: inputRecipe,
  separator: separatorRecipe,
  textarea: textareaRecipe,
  iconButton: iconButtonRecipe,
  dialogContent: dialogContent,
  dialogOverlay: dialogOverlay,
  dialogClose: dialogClose,
};
