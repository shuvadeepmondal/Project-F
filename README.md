## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `vite-project`: a Vite + Reactjs app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


### Build

To build all apps and packages, run the following command:

```
pnpm install
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm install
pnpm dev
```

