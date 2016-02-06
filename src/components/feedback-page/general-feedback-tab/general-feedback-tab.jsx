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
            <h2>Provide general feedback</h2>
            <p>
                Enter any feedback you may have. Please be as descriptive as possible. We will get back to you within 24 hours.
            </p>
            <Paper style={style} zDepth={1} className="container">
                <TextField
                    hintText="Enter Subject"
                    floatingLabelText="Subject" />
                <br/>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                    <input placeholder="Labels" type="text" className="form-control" ></input>
                </div>
                <RaisedButton label="Submit" primary={true} />
            </Paper>
        </div>

    }
});
