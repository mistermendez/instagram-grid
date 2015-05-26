module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        label: 'Home',
        action: function (context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Instagram Grid - Discover new Instagram trends' });
            done();
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        label: 'About',
        action: function (context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'About - Instagram Grid' });
            done();
        }
    },
    signin: {
        path: '/sign-in',
        method: 'get',
        page: 'signin',
        label: 'Sign In',
        action: function (context, payload, done) {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Sign In - Instagram Grid' });
            done();
        }
    },
    dynamicpage: {
        path: '/page/:id',
        method: 'get',
        page: 'page',
        action: function (context, payload, done) {
            context.dispatch('LOAD_PAGE', { id: payload.params.id });
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: payload.params.id + ' - Instagram Grid' });
            done();
        }
    }
};