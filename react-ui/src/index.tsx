import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// type Props = {
// 	show: boolean
// }

// type State = {
//   date: Date,
// 	timerID: any
// }

// class Clock extends React.Component<Props, State> {
// 	public readonly state: State = {
// 		date: new Date(),
// 		timerID: null
// 	}

// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	componentDidMount() {
// 		this.state.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.state.timerID);
// 	}

// 	render() {
// 		if (!this.props.show) {
// 			return null;
// 		}
// 		return (
// 			<div>
// 				<h5>It is {this.state.date.toLocaleTimeString()}.</h5>
// 			</div>
// 		);
// 	}
// }

// function tick() {
// 	ReactDOM.render(<Clock show={true}/>, document.getElementById('clock'));
// }

// setInterval(tick, 1000);

ReactDOM.render(<App />, document.getElementById('root'));

// native DOM Web API directly:
// const render = () => document.getElementById('mountNode')!.innerHTML = `
// <br/>
// <div>
// 	Hello HTML
// 	<input/>
// 	<pre>${(new Date).toLocaleTimeString()}</pre>
// </div>
// `

// React API, which uses the DOM Web API
// ReactDOM.render(React.createElement(
// 	"div", 
// 	null, 
// 	"Hello React",
// 	React.createElement('input', null),
// 	React.createElement('pre', null, (new Date).toLocaleTimeString())
// 	), 
// 	document.getElementById('mountNode2'));

// setInterval(render, 2000)