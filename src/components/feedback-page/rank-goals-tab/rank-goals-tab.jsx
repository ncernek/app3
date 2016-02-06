var React = require('react');
var All = require('./reorder-tool/all.js');

module.exports = React.createClass({
    render() {
        return <div>
            <h2>Rank practice goals</h2>
            <p>
                This is the coolest feature. Clearly.
            </p>
            <script src={All}></script>
        </div>
    }
});