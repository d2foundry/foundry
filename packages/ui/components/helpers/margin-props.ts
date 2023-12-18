import { SystemStyleObject } from "@foundry/styled-system/types";

type MarginProperties = "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml";
export type MarginProps = Pick<SystemStyleObject, MarginProperties>;
