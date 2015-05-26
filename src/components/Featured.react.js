'use strict';
var React = require('react');
var FeedStore = require('../stores/IGStore');
var StoreMixin = require('fluxible').StoreMixin;
var FeedItem = require('./FeedItem.react');
var loadIGFeed = require('../actions/loadInstagram');
var addIGToFeed = require('../actions/addIGToFeed');

var Featured = React.createClass({
    mixins: [StoreMixin],

    statics: {
            storeListeners: [FeedStore]
        },

    getInitialState: function () {
        this.props.context.executeAction(loadIGFeed);
        return this.getState();
    },

    getState: function () {
        return {
            featuredImages: this.getStore(FeedStore).getFeedItems(),
            nextPage: this.getStore(FeedStore).getNextPage(),
            feedDone: this.getStore(FeedStore).isFeedDone(),
            feedLoading: false
        };
    },

    // Add change listeners
    componentDidMount: function() {
        window.addEventListener('scroll', this.checkWindowScroll); // Attach scroll event to the window for infinity scroll
    },

    // Remove change listeners
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.checkWindowScroll);
    },

    onChange: function () {
        var state = this.getStore(FeedStore).getState();
        this.setState(state);
    },

    // Render all feed components, passing state via props
    render: function() {
        var allFeedItems = this.state.featuredImages;
        var feedItems = [];

        for (var key in allFeedItems) {
            feedItems.push(<FeedItem key={key} feedItem={allFeedItems[key]} />);
        }

        return (
            <div>
                {feedItems}
                <div className="feed col-xs-4">
                    <div className="feed-item">
                        <img className="feed-loader" src="/images/tail-spin.svg" />
                    </div>
                </div>
            </div>
            );
    },

    // add next set of images to feed
    getNextImages: function(page) {
        this.props.context.executeAction(addIGToFeed, {nextPage: page});
    },

    // Method to check if more featured images should be loaded, by scroll position
    checkWindowScroll: function(){

        // Get scroll pos & window data
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
        var offsetHeight = Math.max(document.body.offsetHeight, window.innerHeight || 0);
        var scrolled = (s >= (h - (offsetHeight + 250)));

        // If scrolled enough, not currently paging and not complete...
        if(scrolled && !this.state.feedLoading && !this.state.feedDone) {

            // Set application state (feedLoading)
            this.setState({feedLoading: true});

            // Get next page of images from IG
            this.getNextImages(this.state.nextPage);

        }
    }

});

module.exports = Featured;