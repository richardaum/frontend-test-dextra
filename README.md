[![Build Status](https://travis-ci.org/richardaum/frontend-test-dextra.svg?branch=master)](https://travis-ci.org/richardaum/frontend-test-dextra)
[![Coverage Status](https://coveralls.io/repos/github/richardaum/frontend-test-dextra/badge.svg?branch=master)](https://coveralls.io/github/richardaum/frontend-test-dextra?branch=master)

# Front-end test for Dextra

## Instructions
### Install 
Install dependecies for both web client and api
```
yarn install
```

### Run
Start both web client and api
```
yarn start
```

### Tests
Run web client unit tests
```
yarn test
```

## What is implemented?

### Business requirements
- [x] The price of each menu item is the sum of the ingredients which burger has.
- [x] A user can customize a burger. Also can include more ingredients to it.
- [x] A user can create a burger from scratch.
- [x] There are offers avaiable: light, meat and chese. Each one has its own rules. If a burger (default or custom) is part of a offer, it must be visible.
- [x] Always show the current burger price.

### Technical requirements
- [x] A screen to assemble a burger.
- [x] A server must provide only ingredients and default burgers.
- [x] Automated tests (unit / integration)
