//this doesn't work

var React = require('react');
//var Reflux = require('reflux');
//var TopicStore = require('../stores/goal-store');
//var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    //mixins: [
    //    Reflux.listenTo(TopicStore, 'onChange')
    //],
    //getInitialState: function() {
    //    return {
    //        goals: []
    //    }
    //},
    //componentWillMount: function() {
    //    Actions.getTopics();
    //},

    //onChange: function(event, goals) {
    //    this.setState({goals: goals});
    //},
    renderGoals: function() {
        if(!this.props.goals) {
            return <h4>
                Add a goal to get started.
            </h4>
        } else {
            return this.props.goals.map(function(goal) {
                return <Link to={"goals/" + goal.id} className="list-group-item" key={goal.id}>
                    <h4>{goal.name}</h4>
                    <p>{goal.description}</p>
                    <span className="badge">{goal.score}</span>
                </Link>
            })
        }
    },
    render: function() {
        console.log("this.props.goals:" ,this.props.goals);
        return <ul className="list-group">
            {this.renderGoals()}
        </ul>
    }
});