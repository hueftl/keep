# Project Keep

![Node](https://github.com/hueftl/keep/workflows/Node/badge.svg)

Project Keep is a miniature painters and collectors dream!

It will enable every miniature painter and hobbyist to keep track of everything. Your collections, your tools, your
colours. Also it will allow you to keep track of techniques used and stops time for everything.

This is a work in progress, so features will be added gradually as I progress along.

## Toolchains

This project is intended as a monorepo with a [NestJS](https://nestjs.com/) backend API to be consumed by the
[Angular](https://angular.io/) frontend. The chosen implementation language is
[TypeScript](https://www.typescriptlang.org/) for convenience betweeen Angular and NestJS. The tool of choice for the
monorepo configuration is [Nx](https://nx.dev/angular).

## Features / ToDo

### Frontend

- [ ] login
- [ ] dashboard structure
- [ ] paints lists
- [ ] paint picker colour wheel

### Backend

- [ ] webserver with API
- [ ] database
  - [ ] initial setup /structure
- [ ] GraphQL service for API

## Local Usage

All basic scripts can be either run by [Yarn](https://yarnpkg.com/) (yarn 'command') or the [Angular CLI](https://angular.io/cli) (ng 'command').

### Building

In order to use this monorepo locally, you first need to build the APi:

`ng run api:build`

Afterwards it can be run by leveraging the serve command:

`ng run api:serve`

With the API running, the frontend has the chance to fetch its data. Here also it needs to be built first:

`ng run keep:build`

And then you can run it with:

`ng run keep:serve`

### Testing

In order to run all tests use the following command:

`ng test`

If only the API or frontend tests are wanted/needed, run this:

`ng test api` for the API, and

`ng test keep` for the frontend respectively.

## Support

If you like this repo and want to give something back, you can help me grab a coffee:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B11826R)

Thank you!
