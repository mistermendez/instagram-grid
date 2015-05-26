'use strict';
var React = require('react');

var About = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <div className="container">
                <p>Instagram Grid is a simple web app that retrieves recently tagged Instagram photos.</p>
            </div>
        );
    }
});

module.exports = About;