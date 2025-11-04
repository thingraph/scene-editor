# scene-editor

Developed with vue3 + antd4 + vite4 + pnpm

## References

[vue3](https://staging-cn.vuejs.org/guide/introduction.html)

[vite](https://cn.vitejs.dev/)

[pinia](https://pinia.vuejs.org/)

[Vue Router](https://router.vuejs.org/zh/index.html)

[pnpm](https://pnpm.io/zh/)

[qiankun](https://qiankun.umijs.org/zh/)

[vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)

[VueUse](https://vueuse.org/)

[Unocss](https://uno.antfu.me/)

[ant design](https://ant.design/components/)

[ant design icons](https://2fd.github.io/ant-design-icons/)


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
