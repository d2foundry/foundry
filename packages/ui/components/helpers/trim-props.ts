import { SystemStyleObject } from "@foundry/styled-system/types";

type trimProperties = "trim";
// export type TrimProps = Pick<SystemStyleObject, trimProperties> | undefined;

export type TrimProps = {
  trim?: SystemStyleObject["m"];
};
