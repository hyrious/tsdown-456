# https://github.com/rolldown/tsdown/issues/472

Run `npm run build` on main commit:

```console
ℹ tsdown v0.21.0-beta.2 powered by rolldown v1.0.0-rc.6
ℹ config file: /private/tmp/tsdown-456/tsdown.config.ts
ℹ entry: main.ts
ℹ tsconfig: tsconfig.json
ℹ Build start
ℹ dist/style.css   0.02 kB │ gzip: 0.04 kB
ℹ dist/main.d.mts  0.07 kB │ gzip: 0.08 kB
ℹ 2 files, total: 0.09 kB
✔ Build complete in 119ms
```

# https://github.com/rolldown/tsdown/issues/456

Run `npm run build` on commit 3d24124199be52a715d2f49da6da2e956e4db5d0:

```console
ℹ tsdown v0.14.1 powered by rolldown v1.0.0-beta.34
ℹ Using tsdown config: /private/tmp/tsdown-456/tsdown.config.ts
ℹ entry: main.ts
ℹ tsconfig: tsconfig.json
ℹ Build start
Warning validate input options.
- For the "resolve.tsconfigFilename". Invalid key: Expected never but received "tsconfigFilename".

 ERROR  Error: Build failed with 1 error:

[plugin rolldown-plugin-dts:resolver]
RollupError: Cannot resolve import './styles.scss' from '/private/tmp/tsdown-456/main.d.ts
```
