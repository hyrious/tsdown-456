import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["main.ts"],
  dts: { emitDtsOnly: true, oxc: true },
});
