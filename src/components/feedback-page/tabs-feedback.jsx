var React = require('react');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');

var NewGoalTab = require('./new-goal-tab/new-goal-tab');
var ExistingGoalTab = require('./existing-goal-tab/existing-goal-tab');
var RankGoalsTab = require('./rank-goals-tab/rank-goals-tab');
var GeneralFeedbackTab = require('./general-feedback-tab/general-feedback-tab');
//var GoalInput = require('./goal-input');

module.exports = React.createClass({
    getInitialState() {
        return {
            value: 'newGoal',
            goalsStore: {}
        };
    },
    handleChange(value) {
        if(typeof value != "string"){
            return null;
        }
        this.setState({
            value: value
        });
    },
    render() {
        console.log("this.value at TABS:", this.state.value);
        console.log("this.props.goals at TABS:", this.props.goals);
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="New Goal" value="newGoal" >
                    <NewGoalTab />
                </Tab>
                <Tab label="Existing Goal" value="existingGoal">
                    <ExistingGoalTab goals={this.props.goals}/>
                </Tab>
                <Tab label="Rank Goals" value="rankGoals">
                    <RankGoalsTab/>
                </Tab>
                <Tab label="General Feedback" value="generalFeedback">
                    <GeneralFeedbackTab/>
                </Tab>
            </Tabs>
        )
    }
});