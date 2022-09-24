# iogart react ui
A basic set of React components with a minimalistic design. Inspired by MUI, Carbon and Primer.

## Dependencies
- Typescript
- React
- JSS
- Lerna & Nx
- Rollup
- Webpack & DevServer
- Jest
- Prettier
- ESLint
- Storybook


## Scripts
### Install and Bootstrap project
- `% yarn install` : Install dependencies
- `% yarn lerna bootstrap` : Runs Lerna Bootstrap
- `% yarn bootstrap` : Runs dependencies installation & Lerna Bootstrap

### Packages development
- `% yarn start:packages` : Runs watching packages folder

### Preview development
- `% yarn start:preview` : Runs development server with watching on `http://localhost:3233`
- `% yarn start:preview:open` : Runs development server with watching and opens new window
 
### Packages build
- `% yarn build:packages` : Builds `./packages` into `./dist` folder
- `% yarn build:packages:clear` : Clear `./dist` before and builds `./packages` into `./dist` folder
 
### Preview build
- `% yarn build:preview` : Builds `./preview` into `./.preview` folder

### Storybook
- `% yarn build:storybook` - Builds Storybook
- `% yarn start:storybook` - Runs storybook with development server `http://localhost:6060`

### Tests, prettier & linters
- `% yarn prettier:check:all` - Runs prettier and check
- `% yarn prettier:write:packages` - Runs prettier on packages and fix
- `% yarn prettier:write:preview` - Runs prettier on preview and fix
- `% yarn prettier:write:storybook` - Runs prettier on `./.storybook` folder
- `% yarn prettier:write:all` - Runs prettier and fix
- `% yarn linter:packages:` : Runs ESLint on `./packages`
- `% yarn linter:preview:` : Runs ESLint on `./preview`
- `% yarn linter:all:` : Runs ESLint on `./packages` and `./preview`
- `% yarn test:all` - Runs Jest test on `./packages` and `./preview`

### Clearings (only for development &testing purposes)
- `% yarn clear:dist` - Clears `./dist` folder
- `% yarn clear:packages:nodes` - Clears all node_modules in packages
- `% yarn clear:packages:snapshots` - Clears all snapshots in packages
- `% yarn clear:preview` - Clears `./.preview` folder


## Scripts run before commit
1. `% yarn prettier:check:all` - Runs prettier and check
2. `% yarn prettier:write:all` - Runs prettier and fix
3. `% yarn linter:all:` : Runs ESLint on `./packages` and `./preview`
4. `% yarn test:all` - Runs Jest test on `./packages` and `./preview`


## Packages
| Package | Namespace | Description |
|---------|-------------|-----------|
| Icons | `@iogart-react-ui/icons` | Set of SVG icons |
| Iogart | `@iogart-react-ui/iogart` | Main components root |
| Styles | `@iogart-react-ui/styles` | Style features |
| Types | `@iogart-react-ui/types` | Types |
| Utils | `@iogart-react-ui/utils` | Utilities |



## Preview
| Package | Namespace | Description |
|---------|-------------|-----------|
| Preview | `@iogart-react-ui/preview` | Preview stand alone app for development and testing |


