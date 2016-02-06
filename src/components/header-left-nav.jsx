var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');

module.exports = React.createClass({
    render() {
        return <LeftNav docked="true" width="120">
            <MenuItem containerElement={<Link to="" />}>
                <b>Agathos</b></MenuItem>
            <MenuItem containerElement={<Link to="summary-page" />}>
                agaScore</MenuItem>
            <MenuItem containerElement={<Link to="performance-page" />}>
                Performance</MenuItem>
            <MenuItem containerElement={<Link to="feedback-page" />}>
                Feedback</MenuItem>
            <MenuItem containerElement={<Link to="" />}>
                About</MenuItem>
            <MenuItem containerElement={<Link to="" />}>
                Account</MenuItem>
        </LeftNav>
    }
});