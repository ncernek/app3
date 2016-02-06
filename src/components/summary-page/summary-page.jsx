//TODO: create users in the database, this.props.user.fullName

var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire'); //acts as the bridge btwn firebase and component
var Firebase = require('firebase'); //makes network requests and communicates with online db
var GoalInput = require('./goal-input');
var GoalList = require('./goal-list');
var rootUrl = "https://agascore-app.firebaseio.com/";

var ScoreBadge = require('./score-badge');

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
        //var list = this.firebaseRefs.items.map(function(item){
        //    return <ListItem itemsStore={item} />
        //});

        //this.firebaseRefs.items is now accessible in Header at this.props
        return <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="text-center">
                    <h2>Welcome, Dr. Guillaume Javert</h2>
                    <h4>Your agaScore reflects <strong>quality care</strong> and <strong>efficient delivery</strong> for your patients and practice.</h4>
                    <ScoreBadge/>

                </div>

                <hr />
            </div>
            <div className="">
                <div className={"content " + (this.state.loaded ? "loaded" : "")}>
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="text-center">Strongest performance</h3>
                            <GoalList goals={this.state.goals} />
                        </div>
                        <div className="col-sm-6">
                            <h3 className="text-center">Room for improvement</h3>
                            <GoalList goals={this.state.goals} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});

// TODO: reintegrate input
// <GoalInput goalsStore={this.firebaseRefs.goals} />