var React = require('react');
var ButtonLink = require('../button-link');

module.exports = React.createClass({
    render: function() {
        return <div className="text-center">
            <h1>
                We want your feedback.
            </h1>
            <h3>
                Please take a moment to rank the goals below in order of importance to you.
                results will be compiled with those of your peers and weight your agaScores accordingly
            </h3>
            <ButtonLink link="summary-page" text="Finish" />

        </div>
    }
});