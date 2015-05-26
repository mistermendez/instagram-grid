var React = require('react');
var Appbar = require('../components/Appbar.react');
var Footer = require('../components/Footer.react');
var Home = require('./Home.jsx');
var About = require('./About.jsx');
var Page = require('./Page.jsx');
var SignIn = require('./SignIn.jsx');
var ApplicationStore = require('../stores/ApplicationStore');
var RouterMixin = require('flux-router-component').RouterMixin;
var StoreMixin = require('fluxible').StoreMixin;

var Application = React.createClass({
    mixins: [RouterMixin, StoreMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },

    getInitialState: function () {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function () {
        var state = this.getStore(ApplicationStore).getState();
        this.setState(state);
    },
    render: function () {
        var output = '';
        //choose the right page based on the route
        switch (this.state.currentPageName) {
            case 'home':
                output = <Home context={this.props.context} />;
                break;
            case 'about':
                output = <About/>;
                break;
            case 'signin':
                output = <SignIn />;
                break;
            case 'page':
                output = <Page context={this.props.context}/>;
                break;
        }
        //render content
        return (
            <div>
                <Appbar />
                {output}
                <Footer />
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

module.exports = Application;