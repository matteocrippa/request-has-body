# Request Has Body

Easily check for body directly using a middleware.

# Install

```shell
$ npm install --save git+https://git@github.com/matteocrippa/request-has-body.git
```

# Usage

```nodejs
var hasBody = require('request-has-body');

// setup routes
app.use('/', hasBody(['test']), rootRoute);
```

This will check for all the request to have `req.body.test`.
