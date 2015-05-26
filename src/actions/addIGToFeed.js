'use strict';

module.exports = function (context, payload, done) {

    context.service.read('IGfeed', {page: payload.nextPage}, {}, function (err, feed) {
        if (err) {
            context.dispatch('RECEIVE_FEED_FAILURE', payload);
            done();
            return;
        }
        context.dispatch('ADD_IG_MOMENTS_TO_FEED', feed);
        done();
    });
};