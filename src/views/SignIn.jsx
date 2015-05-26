'use strict';
var React = require('react'),
    mui = require('material-ui'),
    Paper = mui.Paper,
    Input = mui.Input,
    RaisedButton = mui.RaisedButton;

var SignIn = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function() {
        //console.log("********* componentDidMount firstname: "+this.refs.firstname.getValue());
    },

    render: function() {
        return (
        <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-3 col-md-6">
            <Paper zDepth={1} innerClassName="paper-style">
                <h2 className="mui-font-style-headline">Log In</h2>
                <Input ref="username" type="text" name="username" placeholder="Email or username" description="Your email or username." />
                <Input ref="password" type="password" name="password" placeholder="Password" description="Your password." />
                <RaisedButton label="Log In" primary={true} />
            </Paper>

            <Paper zDepth={1} innerClassName="paper-style">
                <h2 className="mui-font-style-headline">Sign Up</h2>
                <Input ref="firstname" type="text" name="firstname" placeholder="First Name" description="Your first name." />
                <Input ref="lastname" type="text" name="lastname" placeholder="Last Name" description="Your last name." />
                <Input ref="email" type="text" name="email" placeholder="Email" description="Your email address." />
                <Input ref="username" type="text" name="username" placeholder="Username" description="Create username." />
                <Input ref="password" type="password" name="password" placeholder="Password" description="Create password." />
                <Input ref="password_confirmation" type="password" name="password_confirmation" placeholder="Password Confirmation" description="Enter password again." />
                <RaisedButton label="Sign Up" primary={true} />
            </Paper>
        </div>
        );
    },

    _onChange: function(e, value) {
        console.log("onChange value: "+value);
    }

});

module.exports = SignIn;