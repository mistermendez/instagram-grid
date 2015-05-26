'use strict';
var createStore = require('fluxible/utils/createStore');
var _ = require('underscore');

var IGStore = createStore({
    storeName: 'IGStore',

    handlers: {
        'RECEIVE_IG_FEED_SUCCESS': '_receiveFeed',
        'ADD_IG_MOMENTS_TO_FEED': '_add'
    },

    initialize: function (dispatcher) {
        this._content = '';
        this._feedItems = {};
        this._next_page = null;
        this._feedDone = false;
        this._feedLoading = false;
    },

    _receiveFeed: function (feed) {
        this._feedItems = feed.data;
        this._next_page = feed.pagination.next_url;
        this.emitChange();
    },

    _add: function(feed) {
        this._feedItems = _.union(this._feedItems, feed.data); // could also use push.apply or concat
        this._next_page = feed.pagination.next_url;
        this._feedLoading = false;

        if (this._next_page === undefined)
            this._feedDone = true;

        this.emitChange();
    },

    // Return feed data
    getFeedItems: function() {
        return this._feedItems;
    },

    // next_page is returned if there is a next_page of images
    getNextPage: function() {
        return this._next_page;
    },

    // is feed done
    isFeedDone: function() {
        return this._feedDone;
    },

    getState: function () {
        return {
            content: this._content,
            featuredMoments: this._feedItems,
            nextPage: this._next_page,
            feedDone: this._feedDone,
            feedLoading: this._feedLoading
        };
    },
    dehydrate: function () {
        return this.getState();
    },

    rehydrate: function (state) {
        this._content = state.content,
            this._feedItems = state.featuredMoments,
            this._next_page = state.nextPage,
            this._feedDone = state.feedDone,
            this._feedLoading = state.feedLoading
    }
});

module.exports = IGStore;