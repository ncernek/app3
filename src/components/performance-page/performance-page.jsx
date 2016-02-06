//TODO: create users in the database, this.props.user.fullName
//TODO: create tabs with the charts on them

var React = require('react');
var ReactFire = require('reactfire'); //acts as the bridge btwn firebase and component
var Firebase = require('firebase'); //makes network requests and communicates with online db
var GoalList = require('./goal-list');
var TabsPerformance = require('./tabs-performance');
var rootUrl = "https://agascore-app.firebaseio.com/";

module.exports = React.createClass({
    mixins: [ ReactFire ], //bindAsObject comes from ReactFire. mixins is a group of methods sitting on one object that get copied onto another object. this makes it easy to reuse code
    getInitialState: function() {
        return {
            goals: {},
            loaded: false // when working with handleDataLoaded, this prevents data from flashing on the page at initial load
        }
    },
    componentWillMount: function() {  //this ensures that the db is accessed only once for the entire app
        this.fb = new Firebase(rootUrl + 'goals/');
        this.bindAsObject(this.fb, 'goals');  //this concatenated Url is the nested location for our data. , it binds data onto our local component. don't make a new instance, always refer to this one. when we pass this instance to this.bindAsObject, it is automagically referenced at this.firebaseRefs.items. 'items' means that this.state.items = Firebase data
        this.fb.on('value', this.handleDataLoaded);  //fb.on listens to any event (first param), and triggers this.handleDataLoaded. 'value' gets triggered as soon as data comes from server.
    },
    handleDataLoaded: function() {
        this.setState({loaded: true});
    },
    render: function() {
        return <div>
            <h2 className="text-center">your practice goals</h2>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <div className={"content " + (this.state.loaded ? "loaded" : "")}>
                        <GoalList goals={this.state.goals} />
                    </div>
                </div>
                <div className="col-md-6">
                    <TabsPerformance/>
                </div>
            </div>
        </div>
    }
});
