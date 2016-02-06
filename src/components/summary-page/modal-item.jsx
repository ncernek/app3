var React = require('react');
var Modal = require('react-bootstrap/lib/modal');
var Popover = require('react-bootstrap/lib/popover');
var Tooltip = require('react-bootstrap/lib/tooltip');
var Button = require('react-bootstrap/lib/button');
var OverlayTrigger = require('react-bootstrap/lib/overlaytrigger');

module.exports = React.createClass({
    getInitialState() {
        return {showModal: false };
    },
    componentWillReceiveProps(newProps) {
        this.setState({ showModal: newProps.showModal });
    },
    close() {
        this.setState({ showModal: false });
    },
    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.goal.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.goal.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});
