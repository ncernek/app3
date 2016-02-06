var React = require('react');
var ButtonLink = require('../button-link');

module.exports = React.createClass({
    render: function() {
        return <div className="text-center">
            <h1>
                Your agaScore indicates value to your patients and practice.
            </h1>
            <h3>
                The agaScore is composed of discrete goals. Each goal represents decisions toward value to patients, practices, and the system—in other words, high quality care efficiently delivered.
            </h3>
            <ButtonLink link="ranking-page" text="Next" />

        </div>
    }
});