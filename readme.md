# Coral's portfolio site 2019

This projesct is based on [static HTML Webpack Boilerplate](https://github.com/erickzhao/static-html-webpack-boilerplate) and modified with nunjucks templates. 

[Demo page](https://cocoral.github.io/dist)

# Requirements

  - Node v10.x or later
  - Project can be built on OSX or Windows

# Installation

```bash
npm install
```

# Development

To get the dev environment on local, run:

```bash
npm start
```

# Build

```bash
npm run build
```
This builds the `/dist` folder. 


# Deployment

## Checking build files Locally

```bash
npm run start:prod
```
This should open up `http://localhost:8080` in your browser with web server serving `/dist`. 


## Production

Push to github


# Getting Started / Contributing 

## Style / CSS

SASS source files are stored in `src/styles/`.

Generally, class names should follow a BEM approach.


## Javascript

Js source files are stored in `src/js`.
ES6 will be compild to ES5 by webpack.


# Changelog

  - Oct 2019
    - Initial build

