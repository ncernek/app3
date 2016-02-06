var React = require('react');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');

module.exports = React.createClass({
    getInitialState() {
        return {
            value: 'newGoal'
        };
    },
    handleChange(value) {
        this.setState({
            value: value
        });
    },
    render() {
        console.log("this.value at TABS:", this.state.value);
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="New Goal" value="newGoal" >
                </Tab>
                <Tab label="Existing Goal" value="existingGoal">
                </Tab>
            </Tabs>
        )
    }
});