# React starter with NX dev tools and typescript

![Maintaner](https://img.shields.io/badge/maintainer-extrawest.com-blue)
![GitHub license](https://img.shields.io/github/license/extrawest/react-nx-starter)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/extrawest/react-nx-starter/graphs/commit-activity)
![GitHub release](https://img.shields.io/github/v/release/extrawest/react-nx-starter)
[![GitHub tag](https://img.shields.io/github/v/tag/extrawest/react-nx-starter)](https://github.com/extrawest/react-nx-starter/tags/)

### List of Tools

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![Nx](https://img.shields.io/badge/workspace-143157?style=for-the-badge&logo=NX&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCB2B?style=for-the-badge&logo=firebase&logoColor=333333)

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
```

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
3. `NX_SITE_NAME` - setup site name

## Created by Extrawest React.js Team

## Extrawest.com, 2023
