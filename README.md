
### Project structure
```text
react_app
├──  .env
├──  .env.dist
├── tsconfig.base.json
├── workspace.json
├── .eslintrc
├── .editorconfig
├── .prettierrc
├── .prettierignore
├── .nxignore
├──  package.json
├──  package-lock.json
├── apps
    ├── template
        ├── favicon.ico
        ├── index.html
        |── main.tsx
        ├── src
        |    ├── app
        |    └── assets
        |    └── environments
        |    └── pages
        |    └── routes
        |    └── theme
    ├── template-e2e
    |  └── ...
├── libs
    ├── redux
    |   |──src 
    |   |   ├── apis
    |   |   |   ├── ...
    |   |   ├── axios
    |   |   |   ├── ...
    |   |   ├── middleware
    |   |   |   ├── ...
    |   |   ├── slices
    |   |       ├── ...          
│   ├── shared
    |   |──src 
    |   |   ├── hocs
    |   |   |   ├── ...
    |   |   ├── hooks
    |   |   |   ├── ...
    |   |   ├── i18n
    |   |   |   ├── ...
    |   |   ├── permissions
    |   |   |   ├── ...
    |   |   ├── types
    |   |   |   ├── dto
    |   |   |   ├── interfaces
    |   |   |   ├── enums
    |   |   ├── ui
    |   |   |   ├── ...
    |   |   ├── utils
    |   |   |   ├── ...
    └── templateapp
        └── src
            ├── assets
            │  ├── images
            |  └── ...
            ├── components
            |  ├── common
            |  |  ├── ...
            |  |  └── ...
            │  └── ...
            ├── hocs
            │ └── ...
            ├── hooks
            │ └── ...
            ├── layouts
            |   └── ...
            ├── routes
            |   └── ...
            ├── forms
            |   └── ...
            ├── containers
            │   └── ...
            ├── utils
            |   ├── ....
            |──...


# Available Scripts

Expected node version ">=12"

Clone the repo on your computer. In your terminal, cd into the directory you just added
To install all dependencies, run

npm i || yarn install

## Development

## Development server

For a dev templatel server run: 
`npm run start:template`
or
`yarn start:template`.

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Build

Run `npm run build:template` to build the template application. The build artifacts will be stored in the `dist/` directory.

Run `npm run run:many` to build all projects. The build artifacts will be stored in the `dist/` directory. Use this command for CI

## Lint

Run `npm run lint` to check the lint for all workspace.

Run `npm run lint:all` to check the lint for all applications, libs.

Run `npm run lint:all:fix` to fix the lint errors.

### Config params

1. `NX_BACKEND_URL`- api endpoint
2. `NX_CRYPTO_JS_KEY` - key for decrypt & encrypt

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

yarn build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


Created by Extrawest React.js Team
Extrawest.com, 2022
