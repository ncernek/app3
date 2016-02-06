var React = require('react');
var Paper = require('material-ui/lib/paper');
var Checkbox = require('material-ui/lib/checkbox');
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
            <Paper style={style} zDepth={1} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>80% Xiaflex, Dupuytren’s, Stage I & II</h3>
                        <h4>Description</h4>
                        <p>
                             evaluates appropriate steps with non-surgical options (collagenase injection, needle aponeurotomy) prior to fasciectomy for Stage I & II Dupuytren’s contracture.
                        </p>
                        <h4>Scoring Methodology</h4>
                        <p>
                            start with all fasciectomy claims, isolate those with unique patient identifiers; thereafter remove up to 20% of claims if no previous Dupuytren’s intervention in past year (intended to account for patients already appropriately stepped in other systems; finally, divide number of patients with prior collagenase injection or needle aponeurotomy by total patients.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4>Check all that apply.</h4>
                            <Checkbox
                                name="checkboxName1"
                                value="checkboxValue1"
                                label="Methodology is missing critical clinical conditionals"/>
                            <Checkbox
                                name="checkboxName1"
                                value="checkboxValue1"
                                label="The 20% factor inadequately accounts for unique patient needs"/>
                            <Checkbox
                                name="checkboxName1"
                                value="checkboxValue1"
                                label="Methodology is circumventable or otherwise too lenient"/>
                            <Checkbox
                                name="checkboxName1"
                                value="checkboxValue1"
                                label="Goal is flawed beyond the point of repair"/>
                        <div className="form-group">
                            <label>Please explain:</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                            <RaisedButton label="Attach a file">
                                <input type="file"/>
                            </RaisedButton>
                            <RaisedButton label="Submit" primary={true} />
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    }
});