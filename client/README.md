# client

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Add the deps in client for requesting http to backend
npm install axios --save  

Setting mongoDB as backend

### install and start running monog DB

$mongod --dbpath /data/db

default location is localhost:27017 , Db created in fullstack
package for mongo in server

$npm install --save mongoose bluebird

Eslint fix quick command 

./node_modules/eslint/bin/eslint.js --fix . --ext s,.vue src
