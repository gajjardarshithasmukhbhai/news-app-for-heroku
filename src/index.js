import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
var React = require('react');

var index = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

module.exports = index;