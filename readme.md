# Indivior Sublocade Patient Redisign 2019

My Sample Project is a static website using webpack to complie HTML, javascript and CSS. The site is a re-design of the current subloade.com ( [find repo here](https://github.com/KlickInc/indivior-insupport-hub-sublocade/tree/master) ). 

HAVAS is the AOR.

# Requirements

  - Node v10.x or later
  - Project can be built on OSX or Windows

# Installation

```bash
npm install
```

# Setup / Configuration

There are no other issues/watchouts to consider in setting up and configuring this project.

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

## Locally

```bash
npm run start:prod
```
This should open up `http://localhost:8080` in your browser with web server serving `/dist`. 

## Staging

todo


## Production

todo

# Getting Started / Contributing 

## Style / CSS

SASS source files are stored in `src/styles/`.

Generally, class names should follow a BEM approach.


## Javascript

Js source files are stored in `src/js`.
ES6 will be compild to ES5 by webpack.


## QA Supported Devices/Browsers

  | OS | Device | Browser |
  | :- | :----- | :------ |
  | Windows 7 | Desktop | IE 11 |
  | Windows 7 | Desktop | Chrome (latest) |
  | Windows 7 | Desktop | Firefox (latest) |
  | OSX Yosemite | Desktop | Safari (latest) |
  | iOS (latest) | iPhone 6 | Safari |
  | iOS (latest) | iPad Air 2 | Safari |
  | Android (latest) | Galaxy S5 | Chrome (latest) |


## Screenshots
**Desktop** screenshots should be on **Chrome 65.0 - OSX - 1440 x 900 px**

**Mobile** screenshots should be on **iPhone 6 iOS 11.0 - portrait**

### Screenshotmap.csv
The screeshotmap.csv file is generated using **[this spreadsheet](#todo)**. **Do not edit the screenshotmap.csv file directly**. That way the spreadsheet has the most up to date screenshot list.

If you are not familiar with this spreadsheet ensure you read the [documentation](http://wiki.kinetiq.network/developers/view/175#) explaining how to use it.



# Links / Resources

  - [Current Genome project page](https://genome.klick.com/tickets/#/details/1635140)
  - [QA Test Plan document](#todo)

# Known Issues / Bugs

  - None at this time

# Changelog

  - Oct 2019
    - Initial build

