//This is not in use. Too much functionality for a Summary page. Maybe you can use it on the Feedback page

var React = require('react');
var Firebase = require('firebase'); //makes network requests and communicates with online db
var rootUrl = "https://agascore-app3.firebaseio.com/";

module.exports = React.createClass({
    getInitialState: function() {
        return {
            name: this.props.goal.name,
            nameChanged: false
        }
    },
    componentWillMount: function() {  //this ensures that the db is accessed only once for the entire app
        this.fb = new Firebase(rootUrl + 'goals/' + this.props.goal.key);
        //console.log("this.props.goal.key: " ,this.props.goal.key);
    },
    handleTextChange: function(event) {  //this event is an object that describes what happened in the DOM
        var update = {
            name: event.target.value,
            nameChanged: true
        };
        this.setState(update); //DOM node reference, in this case the name input. this updates the state with the input value
    },
    handleDeleteClick:  function() {
        this.fb.remove();
    },
    handleSaveClick: function() {
        this.setState({nameChanged: false});
        this.fb.update({name: this.state.name}); //Firebase URL reference, so it can be directly updated to. This is nice.
    },
    handleUndoClick: function() {
        this.setState({
            name: this.props.goal.name,
            nameChanged: false
        });
    },
    changesButtons: function() {
        if (!this.state.nameChanged) {
            return null;
        } else {
            return [
                <button className="btn btn-success" onClick={this.handleSaveClick}>Save</button>,
                <button className="btn btn-default" onClick={this.handleUndoClick}>Undo</button>
            ]
        }
    },
    render: function() {
        // this.state in a form means a controlled form input. we also then need to getInitialState
        return <div className="input-group list-group-item">

            <input type="text"
                   className="form-control"
                   value={this.state.name}
                   onChange={this.handleTextChange}
            />
            <span className="input-group-addon" id="basic-addon1">{this.props.goal.score}</span>
            <span className="input-group-addon" id="basic-addon1">{this.props.goal.instancesSuccess + "/" + this.props.goal.instancesTotal}</span>
            <span className="input-group-btn">
                {this.changesButtons()}
                <button className="btn btn-default" onClick={this.handleDeleteClick}>
                    x
                </button>
            </span>
        </div>
    }
});