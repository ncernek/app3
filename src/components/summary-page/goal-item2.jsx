
var React = require('react');
//var ReactRouter = require('react-router');
//var Link = ReactRouter.Link;
//var Firebase = require('firebase'); //makes network requests and communicates with online db
//var rootUrl = "https://agascore-app.firebaseio.com/";
var ModalItem = require('./modal-item');

module.exports = React.createClass({
    getInitialState() {
        return {
            name: this.props.goal.name,
            nameChanged: false,
            showModal: false
        }
    },
    open() {
        this.setState({ showModal: true });
    },
    render() {
        return <a  className="list-group-item"
                   key={this.props.goal.id}
                   onClick={this.open}>
            <span className="list-group-item-header"><b><big>{this.props.goal.name}</big></b></span>
            <span className="badge">{this.props.goal.score}</span>
            <p className="list-group-item-text">{this.props.goal.description}</p>
            <ModalItem goal={this.props.goal} showModal={this.state.showModal} />
        </a>
    }
});
//
//to={"goals/" + this.props.goal.id}
//
//<span className="badge">{this.props.goal.instancesSuccess + "/" + this.props.goal.instancesTotal}</span>