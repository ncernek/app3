//TODO: install history package and implement: https://www.npmjs.com/package/history , https://github.com/rackt/react-router/blob/master/upgrade-guides/v2.0.0.md#no-default-history

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router; // router object that decides what content to show on the page based on the current url
var Route = ReactRouter.Route; // instructs router on constructing itself

var Skeleton = require('./skeleton');

var ExamplePage = require('../components/intro/example-page');
var RankingPage = require('../components/intro/ranking-page');
var SummaryPage = require('../components/summary-page/summary-page');
var PerformancePage = require('../components/performance-page/performance-page');
var FeedbackPage = require('../components/feedback-page/feedback-page');

// each route object declares a possible route the user can visit
// the child routes are additive - the passed component is a prop of the parent
//it can be accessed via this.props.children
// "topics/:id" means that in Topic, this.props will have an id to give us
module.exports = (
    <Router>
        <Route path="/" component={Skeleton}>
            <Route path="example-page" component={ExamplePage} />
            <Route path="ranking-page" component={RankingPage} />
            <Route path="summary-page" component={SummaryPage} />
            <Route path="performance-page" component={PerformancePage} />
            <Route path="feedback-page" component={FeedbackPage} />
        </Route>
    </Router>
);

