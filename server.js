'use strict';
require('node-jsx').install({harmony: true});
var express = require('express');
var favicon = require('serve-favicon');
var serialize = require('serialize-javascript');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var navigateAction = require('flux-router-component').navigateAction;
var debug = require('debug')('Example');
var React = require('react');
var app = require('./src/app.js');
var HtmlComponent = React.createFactory(require('./src/views/Html.jsx'));

var server = express();
server.set('state namespace', 'App');
server.use(favicon(__dirname + '/images/favicons/favicon.ico'));
server.use('/public', express.static(__dirname + '/public'));
server.use('/images', express.static(__dirname + '/images'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

var fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(require('./src/services/feed'));

server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

server.use(function (req, res, next) {
    var context = app.createContext({
        req: req, // The fetchr plugin depends on this
        xhrContext: {
            _csrf: req.csrfToken() // Make sure all XHR requests have the CSRF token
        }
    });

    debug('Executing navigate action');
    context.getActionContext().executeAction(navigateAction, {
           url: req.url
        }, function (err) {
        if (err) {
            if (err.status && err.status === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        var AppComponent = app.getAppComponent();

        var html = React.renderToStaticMarkup(HtmlComponent({
            state: exposed,
            context: context.getComponentContext(),
            markup: React.renderToString(AppComponent({
                context: context.getComponentContext()
            }))
        }));

        debug('Sending markup');
        res.write(html);
        res.end();
    });

});

var port = process.env.PORT || 4444;
server.listen(port);
console.log('Listening on port ' + port);