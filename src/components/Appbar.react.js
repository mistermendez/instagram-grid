var React = require('react'),
    mui = require('material-ui'),
    LeftNav = mui.LeftNav,
    AppBar = mui.AppBar,
    MenuItem = mui.MenuItem;

menuItems = [
    { type: mui.MenuItem.Types.SUBHEADER, text: 'Instagram Grid' },
    { type: mui.MenuItem.Types.LINK, payload: '/', text: 'Home' },
    { type: mui.MenuItem.Types.LINK, payload: '/about', text: 'About' },
    { type: mui.MenuItem.Types.LINK, payload: '/sign-in', text: 'Sign In' },
    { type: mui.MenuItem.Types.LINK, payload: '/page/faq', text: 'FAQ' }
];

var Navbar = React.createClass({

    getInitialState: function() {
        return {
            isDocked: false
        };
    },

    render: function () {
        return (
            <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
                <div className="container-fluid header">
                    <button className="hamburger-button" onTouchTap={this._showLeftNavClick} type='button'>Show navigation</button>
                    <div className="header-title">
                        <a href="/">Instagram Grid</a>
                    </div>
                    <ul className="header-actions">
                        <li>
                            <a href="#"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                        </li>
                        <li>
                            <a href="/about"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span></a>
                        </li>
                        <li>
                            <a href="/sign-in"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                        </li>

                    </ul>
                </div>

                <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
            </nav>
            );
    },

    _showLeftNavClick: function() {
        this.refs.leftNav.toggle();
    }

});

module.exports = Navbar;