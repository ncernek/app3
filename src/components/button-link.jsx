var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return <Link
            to={this.props.link}
            className="">
            {this.props.text}
        </Link>
    }
});