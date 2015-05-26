'use strict';
var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');

var Html = React.createClass({

    render: function() {
        return (
            <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Instagram Grid is a simple web app that retrieves recently tagged Instagram photos" />
                <meta name="keywords" content="instagram, grid" />
                <meta httpEquiv="X-Frame-Options" content="deny" />

                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>

                <link rel="stylesheet" href="/public/css/index.css" />
                <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
            </head>

            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>

            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/bundle.js"></script>
            </html>
        );
    }
});

module.exports = Html;