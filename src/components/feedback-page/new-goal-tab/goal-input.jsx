//TODO This is overwriting the this.state.value in the parent component

var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {name: ""}
    },
    handleClick: function() {
        this.props.goalsStore.push({  //not array.push. props.itemsStore points at this.firebaseRefs.items in app.jsx
            name: this.state.name,
            description: this.state.description,
            id: this.state.name,
            instancesSuccess: 0,
            instancesTotal: 0,
            score: 0
        });
        this.setState({
            name: "",
            description: "",
        });
    },
    handleNameInputChange: function(event) {  //this event is an object that describes what happened in the DOM
        this.setState({
            name: event.target.value
        }); //DOM node reference, in this case the input. this updates the state with the input value
        console.log("state.name at INPUT: ", this.state.name);
    },
    handleDescriptionInputChange: function(event) {  //this event is an object that describes what happened in the DOM
        this.setState({
            description: event.target.value
        }); //DOM node reference, in this case the input. this updates the state with the input value
    },
    render: function() {
        //all things in input-group tag work together
        // the input box is only gonna show this.state.text
        // onChange={this.handleInputChange}  is an event handler
        return <div className="input-group">
            <input
                value={this.state.name}
                onChange={this.handleNameInputChange}
                type="text"
                className="form-control"
                placeholder="name"/>
            <input
                value={this.state.description}
                onChange={this.handleDescriptionInputChange}
                type="text"
                className="form-control"
                placeholder="description"/>
            <br/>
            <span className="input-group-btn">
                <button onClick={this.handleClick}
                        className="btn btn-primary"
                        type="button">
                    Add a goal
                </button>
            </span>
        </div>
    }
});


// a controlled form element means it is directly tied to this.state. here the state is directly tied to the input