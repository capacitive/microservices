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