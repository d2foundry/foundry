import { SystemStyleObject } from "@pandacss/dev";

const marginValues = [
  "auto",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-1",
  "-2",
  "-3",
  "-4",
  "-5",
  "-6",
  "-7",
  "-8",
  "-9",
] as const;

export interface MarginProps {
  m: (typeof marginValues)[number];
  mx: (typeof marginValues)[number];
  my: (typeof marginValues)[number];
  mt: (typeof marginValues)[number];
  mr: (typeof marginValues)[number];
  mb: (typeof marginValues)[number];
  ml: (typeof marginValues)[number];
}

const paddingValues = [
  "auto",
  "0",
  "0.5",
  "1",
  "1.5",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const;

export interface PaddingProps {
  p: (typeof paddingValues)[number];
  px: (typeof paddingValues)[number];
  py: (typeof paddingValues)[number];
  pt: (typeof paddingValues)[number];
  pr: (typeof paddingValues)[number];
  pb: (typeof paddingValues)[number];
  pl: (typeof paddingValues)[number];
}

export interface SxProp {
  sx?: SystemStyleObject;
}

export type GlobalLayoutProps = MarginProps & PaddingProps;
