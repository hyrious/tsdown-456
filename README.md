# https://github.com/rolldown/tsdown/issues/456

Run `npm run build`:

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
