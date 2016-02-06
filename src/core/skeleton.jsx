var React = require('react');
var Header = require('../components/header');
var IntroPage = require('../components/intro/intro-page');
var HeaderLeftNav = require('./../components/header-left-nav');

module.exports = React.createClass({
    content: function() {
        if(this.props.children) {
            return this.props.children;
        } else {
            return <IntroPage />
        }
    },
    render: function() {
        return <div className="row">
            <div className="col-md-1">
                <HeaderLeftNav />
            </div>

            <div className="col-md-11">
                {this.content()}
            </div>
        </div>
    }
});

//skeleton inherits its children through the router