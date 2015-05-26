'use strict';
var request = require('superagent');

module.exports = {
    name: 'IGfeed',
    read: function (req, resource, params, config, callback) {
        var url = 'https://api.instagram.com/v1/tags/ootd/media/recent?client_id=1d988e7b05ec4f608e71b568fb3d46a0';
        if (params.page !== undefined){
            url = params.page;
        }

        request
            .get(url)
            .end(function (err, res) {
                callback(err, res.body);
            });
    }
};