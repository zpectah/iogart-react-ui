# iogart react ui v0.0.0
Iogart React UI is simple web app kit for quick prototyping and building web apps with React.js.
Library includes basic components or helper function and many more.

⚠️ Library is still in development, so you may try and test or report bug ⚠️

## Dependencies
- [Rollup](https://www.rollupjs.org/guide/en/)
- [Lerna](https://lerna.js.org/)
- [Luxon](https://moment.github.io/luxon/#/)
- [Lodash](https://lodash.com/)
- [@emotion](https://emotion.sh/docs/@emotion/css) [@emotion/react, @emotion/styled]
- [Spring](https://react-spring.dev/#introduction)
- [UseMeasure](https://www.npmjs.com/package/react-use-measure)

## Scripts

- `% yarn install -W` Install all dependencies
- `% yarn build:all` - Run all 'build' task defined in submerged in `packages/<package>/package.json`
- `% yarn build:all:cache` - Same as line above but with clearing `node_modules/.cache/nx`
- `% yarn start:all` - Start development watch
- `% yarn serve:storybook` - Start server with storybook at `http://localhost:6006/`
- `% yarn build:storybook` - Build storybook instance

## Content

### Packages
Name | Package | Documentation
--- | --- | ---
base | `@iogart-react-ui/base` | [read more](packages/base/README.md)
core | `@iogart-react-ui/core` | [read more](packages/core/README.md)
icons | `@iogart-react-ui/icons` | [read more](packages/icons/README.md)
iogart | `@iogart-react-ui/iogart` | [read more](packages/iogart/README.md)
styles | `@iogart-react-ui/styles` | [read more](packages/styles/README.md)
types | `@iogart-react-ui/types` | [read more](packages/types/README.md)
utils | `@iogart-react-ui/utils` | [read more](packages/utils/README.md)


