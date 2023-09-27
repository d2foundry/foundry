import { getManifest } from "@/lib/api/destinyManifest";

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  const manifest = await getManifest();
  const paths = params.path; // 'a', 'b', or 'c',
  // const allKeys = Object.keys(manifest);
  const result = paths.reduce((next, key) => {
    if (key in next) {
      return { ...next[key] };
    } else {
      return next;
    }
  }, manifest);
  return Response.json(result, { status: 200 });
}
