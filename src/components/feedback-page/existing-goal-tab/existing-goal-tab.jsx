// TODO: these have been removed
//      goal={this.state.goal}

var React = require('react');
var DropDownMenu = require('material-ui/lib/DropDownMenu');
var MenuItem = require('material-ui/lib/menus/menu-item');
var GoalEdit = require('./goal-edit');

module.exports = React.createClass({
    getInitialState() {
        return {
            value: 2
        }
    },
    handleChange() {
        this.setState({value: this.state.value})
    },
    renderDropdown() {
        return <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Goal1"/>
                <MenuItem value={2} primaryText="Goal2"/>
                <MenuItem value={3} primaryText="Goal3"/>
                <MenuItem value={4} primaryText="Goal4"/>
                <MenuItem value={5} primaryText="Goal5"/>
            </DropDownMenu>
    },
    render() {
        return <div>
            <h2>Improve existing practice goal</h2>
            Pick from the menu and proceed.
            {this.renderDropdown()}
            <GoalEdit/>
        </div>

    }
});

