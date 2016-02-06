var React = require('react');
var ButtonLink = require('../button-link');

module.exports = React.createClass({
    render: function() {
        return <div className="text-center">
            <h1>
                Welcome to Agathos.
            </h1>
            <h3>
                We integrate the highest quality standards, practice economic needs, and feedback from our member physicians—<strong>you</strong>—into to a new standard for value adapted to <strong>your</strong> practice and <strong>your</strong> patients.
            </h3>
            <ButtonLink link="example-page" text="Next" />

        </div>
    }
});
