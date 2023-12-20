import { Metadata } from "next";
import { Home } from "./home";

// const dayInMs =
//   1000 * // second in ms
//   60 * // to minutes
//   60 * // to hours
//   24; // to day

export const metadata: Metadata = {
  title: "home // FOUNDRY",
};
export default async function Page() {
  return <Home />;
}
