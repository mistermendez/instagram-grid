'use strict';
var React = require('react');
var Featured = require('../components/Featured.react');

var Home = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <Featured context={this.props.context} />
            );
    }
});

module.exports = Home;