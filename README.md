# iogart react ui

...

## Dependencies

- Typescript
- React
- JSS
- Lerna
- Rollup
- Webpack & DevServer

## Scripts

- `% yarn bootstrap` : Runs packages installation & Lerna bootstrap
- `% yarn build:packages` : Builds `/packages` in to `/dist` folder
- `% yarn build:packages:clear` : Clear `dist` and builds `/packages` into `/dist` folder
- `% yarn build:preview` : Builds `/preview` into `./preview` folder
- `% yarn start:packages` : Runs watching packages folder
- `% yarn start:preview` : Runs development server with watching on `http://localhost:3232`
- `% yarn start:preview:open` : Runs development server with watching and opens new window
- `% yarn start:preview:packages` : Runs development server with watching `/packages` and opens new window
- `% yarn clear:dist` - Clears `/dist` folder
- `% yarn clear:packages:nodes` - Clears all node_modules in packages
- `% yarn clear:packages:snapshots` - Clears all snapshots in packages
- `% yarn clear:preview` - Clears `/.preview` folder
- `% yarn prettier:check:all` - Runs prettier and check
- `% yarn prettier:write:packages` - Runs prettier on packages and fix
- `% yarn prettier:write:preview` - Runs prettier on preview and fix
- `% yarn prettier:write:storybook` - Runs prettier on `/.storybook` folder
- `% yarn prettier:write:all` - Runs prettier and fix
- `% yarn test:all` - Runs Jest test on `packages` and `preview`
- `% yarn build:storybook` - Builds storybook
- `% yarn start:storybook` - Runs storybook with development server

