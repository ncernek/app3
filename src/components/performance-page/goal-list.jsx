var React = require('react');
var GoalItem2 = require('./goal-item2');

module.exports = React.createClass({
    renderList: function() {
        if(!this.props.goals || Object.keys(this.props.goals).length === 0) {
            return <h4>
                Add a goal to get started.
            </h4>
        }  // each item needs a unique id, so we need to pass a key attribute
        else {
            var children = [];
            for(var key in this.props.goals) {
                var goal = this.props.goals[key];
                goal.key = key;
                children.push(
                    <GoalItem2
                        goal={goal}
                        key={key}
                    >
                    </GoalItem2>
                );
            }
            return children;
        }
    },
    // When we call this.renderList() we're saying that we want the function to be invoked at that point
    render: function() {
        return <div className="list-group">
            {this.renderList()}
        </div>
    }
});