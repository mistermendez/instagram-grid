var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var fetchrPlugin = require('fluxible-plugin-fetchr');
var injectTapEventPlugin = require('react-tap-event-plugin');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./views/Application.jsx'))
});

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

app.plug(routrPlugin({
    routes: require('./app-routes')
}));

app.plug(fetchrPlugin({
    xhrPath: '/api' // Path for XHR to be served from
}));

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/PageStore'));
app.registerStore(require('./stores/IGStore'));

module.exports = app;