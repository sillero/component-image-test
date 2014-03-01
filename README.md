component-image
================

[![Build Status](https://travis-ci.org/mozilla-appmaker/component-image.png)](https://travis-ci.org/mozilla-appmaker/component-image)

Basic button component for [Appmaker](https://github.com/mozilla-appmaker/appmaker).

Appmaker import:
```
<link rel="import" href="/component-image">
```

# Test Status

See the github page http://mozilla-appmaker.github.io/component-image/ for test status.

# Installation
`component.html` can be served from this repo without any setup. However, `Polymer` and `ceci-element` must be exposed for the component to function. The instructions below detail a full development/testing environment.

Make sure you have `nodejs`, `npm`, and `git` installed.

If you don't already have one, create a root `mozilla-appmaker` directory:
```
mkdir mozilla-appmaker
cd mozilla-appmaker
```

Clone this repo:
```
git clone git@github.com:mozilla-appmaker/component-image.git
```

Clone the `tools` repo:
```
git clone git@github.com:mozilla-appmaker/tools.git
```

Clone the `appmaker` repo, which will provide foundational appmaker components:
```
git clone git@github.com:mozilla-appmaker/appmaker.git
```

Your directory structure should look like this (more component repos can be cloned as siblings of `component-image`):
```
mozilla-appmaker/
  ├── appmaker/
  ├── component-image/
  └── tools/
```

Enter the `component-image` directory, and install npm dependencies
```
cd component-image
npm install
```

If `npm` installs dependencies without any trouble, you're ready to go!

# Usage
Include this component in your appmaker app using Polymer's `<link>` import tag:
```
<link rel="import" href="{url-to-this-repo}">
```

In appmaker, this component is available using gh-pages:
```
<link rel="import" href="/component-image">
```

# Testing

The test framework has three entry points:

1. `grunt karma:unit` runs unit tests (once).
2. `grunt karma:dev` watches the component directory, and runs unit tests when a file change occurs.
3. `grunt test-server` starts a server listening on port `9001`, and opens `index.html` in the default browser to show test status.

# Test Development
```
mozilla-appmaker/
  ├── conf/
      ├── karma.conf.js       karma configuration
      └── mocha.conf.js       mocha configuration (can be ignored 99% of the time)
  ├── test/
      ├── fixtures/           contains html files which are converted to js before tests run
      ├── js/                 contains js files for running tests
          └── tests.js        root for running tests. likely to contain calls to 'describe', 'before', 'test', etc.
      └── html/               contains html files which are included by 'tests.js'
          └── test.html       included by 'tests.js' as a working component environment for running tests
  ├── tools/
      ├── component-name.js   (ignore this file -- it's only here to make the framework simpler)
      ├── harness-utils.css   some simple css for
      ├── harness-utils.js    (ignore this file -- it's only here to make the framework simpler)
      ├── iframe-utils.js     (ignore this file -- it's only here to make the framework simpler)
  ├── index.html              entry point for running tests in the browser
  ├── component.css           css for component definition
  └── component.html          component definition
```

## `index.html`
Entry point for in-browser testing.
