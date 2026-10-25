import { cp, mkdir, rm } from "node:fs/promises";
import { build } from "esbuild";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

await build({
  entryPoints: {
    background: "src/background/service-worker.ts",
    popup: "src/popup/popup.ts",
  },
  bundle: true,
  format: "esm",
  target: "chrome120",
  outdir: "dist",
});

await cp("manifest.json", "dist/manifest.json");
await cp("src/popup/popup.html", "dist/popup.html");