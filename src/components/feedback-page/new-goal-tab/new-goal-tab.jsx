//TODO: It would be nice to have the goal-input here, but there might be need for the firebase logic in other tabs

var React = require('react');
var TextField = require('material-ui/lib/text-field');
var Slider = require('material-ui/lib/slider');
var Paper = require('material-ui/lib/paper');
var RaisedButton = require('material-ui/lib/raised-button');

var style = {
    height: 400,
    width: '100%',
    margin: 20,
    display: 'inline-block'
};

module.exports = React.createClass({
    render() {
        return <div>
            <h2>Propose new practice goal</h2>
            <p>
                Enter a new goal below. It won't appear on your Summary and Performance pages until we've processed it.
            </p>
            <Paper style={style} zDepth={1} className="container">
                <TextField
                    hintText="Enter Goal Name"
                    floatingLabelText="Goal Name" />
                <br/>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <h4>How important is this to you?</h4>
                    <Slider defaultValue={0.5}/>
                <RaisedButton label="Submit" primary={true} />
            </Paper>
        </div>

    }
});