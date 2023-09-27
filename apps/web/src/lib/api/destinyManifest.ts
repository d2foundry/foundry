import {
  AllDestinyManifestComponents,
  DestinyManifestSlice,
  HttpClientConfig,
  getDestinyManifest,
  getDestinyManifestSlice,
} from "bungie-api-ts/destiny2";

export const MANIFEST_SLICES = [
  "DestinyInventoryItemDefinition",
  "DestinyPlugSetDefinition",
  "DestinyStatDefinition",
  "DestinyPowerCapDefinition",
  "DestinyCollectibleDefinition",
  "DestinyStatGroupDefinition",
  "DestinyDamageTypeDefinition",
  "DestinySocketTypeDefinition",
  "DestinySandboxPerkDefinition",
] as (keyof AllDestinyManifestComponents)[];

export async function $http<T>(config: HttpClientConfig): Promise<T> {
  const res = await fetch(config.url, {
    method: config.method,
    headers: {
      "X-API-KEY": process.env.BUNGIE_API_KEY ?? "",
    },
  });
  const data = await res.json();
  return data as T;
}

export async function fetchManifest() {
  const data = await getDestinyManifest($http);
  return data.Response;
}

export async function getManifest(): Promise<
  DestinyManifestSlice<typeof MANIFEST_SLICES>
> {
  const destinyManifest = await fetchManifest();
  return await getDestinyManifestSlice($http, {
    destinyManifest,
    tableNames: MANIFEST_SLICES,
    language: "en",
  });
}
