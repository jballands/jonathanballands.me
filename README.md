# jonathanballands.me

Version 3.0 of my personal website.

## Installation

```
$ yarn
```

## Usage

```
$ yarn dev
```

Starts a local server at `localhost:3001`. Uses [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/).

```
$ yarn build
```

Builds the website into `/public` using production level settings.

```
$ yarn fresh
```

Deletes `node_modules` so you can install dependencies again.

```
$ yarn s3:upload
```

Uploads to Amazon S3, given that your AWS CLI has been set up and has been given the correct permissions in Amazon IAM.


