The purpose of this project is figure out how to use angular-cesium while also being able to run unit tests.

These are the errors that occure when running `ng test`

```
01 05 2019 09:14:09.602:INFO [Chrome 73.0.3683 (Windows 10.0.0)]: Connected on socket cNA4-HiMgS7MQB9sAAAA with id 53976396
Chrome 73.0.3683 (Windows 10.0.0) ERROR
  {
    "message": "Uncaught ReferenceError: Cesium is not defined
at http://localhost:9876/_karma_webpack_/vendor.js:100708:16

ReferenceError: Cesium is not defined
    at http://localhost:9876/_karma_webpack_/vendor.js:100708:16
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100712:2)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100350:26)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100799:10)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at http://localhost:9876/_karma_webpack_/vendor.js:100313:18
    at http://localhost:9876/_karma_webpack_/vendor.js:100316:10
    at webpackUniversalModuleDefinition (http://localhost:9876/_karma_webpack_/vendor.js:100247:20)",
    "str": "Uncaught ReferenceError: Cesium is not defined
at http://localhost:9876/_karma_webpack_/vendor.js:100708:16

ReferenceError: Cesium is not defined
    at http://localhost:9876/_karma_webpack_/vendor.js:100708:16
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100712:2)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100350:26)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100799:10)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at http://localhost:9876/_karma_webpack_/vendor.js:100313:18
    at http://localhost:9876/_karma_webpack_/vendor.js:100316:10
    at webpackUniversalModuleDefinition (http://localhost:9876/_karma_webpack_/vendor.js:100247:20)"
  }

Chrome 73.0.3683 (Windows 10.0.0) ERROR
  {
    "message": "Uncaught ReferenceError: Cesium is not defined
at http://localhost:9876/_karma_webpack_/vendor.js:100708:16

ReferenceError: Cesium is not defined
    at http://localhost:9876/_karma_webpack_/vendor.js:100708:16
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100712:2)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100350:26)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100799:10)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at http://localhost:9876/_karma_webpack_/vendor.js:100313:18
    at http://localhost:9876/_karma_webpack_/vendor.js:100316:10
    at webpackUniversalModuleDefinition (http://localhost:9876/_karma_webpack_/vendor.js:100247:20)",
    "str": "Uncaught ReferenceError: Cesium is not defined
at http://localhost:9876/_karma_webpack_/vendor.js:100708:16

ReferenceError: Cesium is not defined
    at http://localhost:9876/_karma_webpack_/vendor.js:100708:16
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100712:2)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100350:26)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at Object.<anonymous> (http://localhost:9876/_karma_webpack_/vendor.js:100799:10)
    at __webpack_require__ (http://localhost:9876/_karma_webpack_/vendor.js:100269:30)
    at http://localhost:9876/_karma_webpack_/vendor.js:100313:18
    at http://localhost:9876/_karma_webpack_/vendor.js:100316:10
    at webpackUniversalModuleDefinition (http://localhost:9876/_karma_webpack_/vendor.js:100247:20)"
  }

```






# Prototypes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
