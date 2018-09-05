import React, { Component } from 'react';
import './App.css';

class Clock extends React.Component {
	constructor(props) {
	super(props);
	this.state = {date: new Date()};
	}

	componentWillMount() {
		console.log('This is componentWillMount');
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
			);
		console.log('This is componentDidMount');
	}

	componentWillReceieveProps(nextProps) {
		if(this.props.date !== nextProps.date) {
		console.log('This is componentWillRecieveProps', nextProps);
	}
}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('This is shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('This is componentWillUpdate', nextProps, nextState);
	}


	componentDidUpdate(prevProps, prevState) {
		console.log('This is componentDidUpdate', prevProps, prevState);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
		console.log('This is componentWillUnmount');
	}


	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
	return (
		<div>
		<h1>Hello, world!</h1>
		<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
		</div>
	);
	}
}

export default Clock;