var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">agaScore</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="summary-page">Summary</Link></li>
                        <li><Link to="performance-page">Performance</Link></li>
                        <li><Link to="feedback-page">Feedback</Link></li>
                        <li><Link to="">About</Link></li>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#">settings</Link></li>
                                <li><Link to="#">profile</Link></li>
                                <li><Link to="#">display</Link></li>
                                <li role="separator" className="divider"></li>
                                <li><Link to="#">log out</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});