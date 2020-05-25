# Next Template

## Folders

- \__tests__: Test files to test webpage or single components
- docker: Docker files to launch in a Container
- public: Static files
  - assets: Generally used for Static assets like Pictures
  - uploads: used for user uploaded files
- scripts: Contains scripts to quicky make actions (take  look in each file to see what it does)
- src: Source folder
  - client: Client-side Elements
    - components: Components used in pages
    - libs: Code used by the Client
    - styl: Stylus file location
      - modules: Stylus module location
  - common: Elements used by both Client-side and Server-side code
  - pages: Contains your NextJS pages
  - server: Custom server folder (if you are doing a basic NextJS app you can freely delete this folder)

## TODO list

### Typescript/Javascript

- [x] Support Typescript
- [x] Support Javascript
- [ ] Support Javascript files Linting
- [x] Unit Testing
- [ ] Lint unit tests

### Stylus

- [x] Support Stylus files
- [x] Support Stylus Styled-jsx (mutually exclusive with purgeCSS)
- [x] Support PurgeCSS (mutually exclusive with styled-jsx)
- [ ] Support both Stylus CSS modules and purge CSS
- [ ] Support typed stylus files

## Custom Server

If you want to have a Custom server you simply have to start editing `src/server/server.ts` and after that to dev run `yarn cs-dev`

## Packages

### Dependencies

- @zeit/next-stylus: Stylus support in Nextjs
- glob: Sitemap Generation
- next: Nextjs
- next-compose-plugins: Better plugin formatting in config
- next-purgecss: PurgeCSS Plugin in config
- react: React
- react-dom: React DOM (React Dependency)
- serve: Server for static website
- styled-jsx-plugin-stylus: Styled-JSX plugin of Stylus
- stylus: Stylus
- typescript: Typescript
- webpack: Webpack
- webpack-cli: Webpack dependency

### Dev Dependencies

- @babel/core: Tests Dependency
- @babel/preset-env: Tests Dependency
- @babel/preset-react: Tests Dependency
- @types/jest: Testing Typing
- @types/node: Typescript Typing
- @types/react: Typescript Typing
- @types/react-test-renderer: Testings Typing
- @typescript-eslint/eslint-plugin: ESLint Typescript Plugin
- @typescript-eslint/parser: ESLint Typescript parser
- babel-jest: Compile files for jest use
- eslint: ESLint
- eslint-plugin-react: ESLint React Plugin
- jest: Jest tessting framework
- react-test-renderer: Test React components
- ts-node-dev: Start the developpement server and restart it on changes (remove this dev-deps if you're not using a custom server)
