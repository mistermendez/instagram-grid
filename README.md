# Instagram Grid

A simple web app that retrieves recently tagged Instagram photos. Implemented with React, Flux and Express.

![App screen shot](images/igg-ss.jpg?raw=true)

## Technology

The front-end is built with [React](http://facebook.github.io/react/), Yahoo's isomorphic Flux implementation - [Fluxible](http://fluxible.io/), and Material Design. Client side routing is done with [Routr Plugin for Fluxible](https://github.com/yahoo/fluxible-plugin-routr).

Server side, Instagram Grid is built with the [Express](http://expressjs.com/) web framework.

## Live demo

[http://instagram-grid.herokuapp.com](http://instagram-grid.herokuapp.com)

## Install

1. Install [brew](http://brew.sh/)

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install git and node.

```
brew install git node
```

3. Checkout out project.

```
git clone https://github.com/mistermendez/instagram-grid.git
```

4. Run local server.

```
cd instagram-grid
```

```
make install build gulpserve
```

5. Open in browser.

http://0.0.0.0:4444/

##Project Layout

  * /images - application image assets
  * /src - JavaScript source files. Flux architecture
  	* /actions - helper functions that pass data to the dispatcher
    * /components - modular components of pages
    * /services - api services to fetch data
    * /stores - store application state and logic that reacts to data events
    * /views - page views
  * /styles - src (less, scss, sass) stylesheets, styles for individual components should be broken out and put in the components folder. They can be included in the build using an @import statement