var React = require('react');
var Tabs = require('material-ui/lib/tabs/tabs');
var Tab = require('material-ui/lib/tabs/tab');

var KeyDetailTab = require('./key-detail-tab/key-detail-tab');
var PeerCompareTab = require('./peer-compare-tab/peer-compare-tab');
var TimeSeriesTab = require('./time-series-tab/time-series-tab');

module.exports = React.createClass({
    getInitialState() {
        return {
            value: 'peerCompare'
        };
    },
    handleChange(value) {
        if(typeof value != "string"){
            return null;
        }
        this.setState({
            value: value
        });
    },
    render() {
        console.log("this.value at TABS:", this.state.value);
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Key Detail" value="keyDetail" >
                    <KeyDetailTab/>
                </Tab>
                <Tab label="Peer Compare" value="peerCompare">
                    <PeerCompareTab/>
                </Tab>
                <Tab label="Time Series" value="timeSeries">
                    <TimeSeriesTab/>
                </Tab>
            </Tabs>
        )
    }
});