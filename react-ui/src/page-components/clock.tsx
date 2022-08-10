import React from 'react';
import './clock.css';

enum Mode {
	default,
	timestamp,
	stopwatch,
	timer
}

type Props = {
	show?: boolean,
	start?: boolean,
	mode?: Mode
}

type State = {
  date: Date,
	stopWatchTime: Date,
	timerID: any,
	running: boolean
}

class Clock extends React.Component<Props, State> {
	public readonly state: State = {
		date: new Date(),
		stopWatchTime: new Date(),
		timerID: null,
		running: false
	}

	public readonly props: Props = {
		mode: Mode.default
	}

	tick() {
		this.setState({
			date: new Date(),
			running: true
		});
	}

	tickStopWatch() {
		// let newTime = new Date(this.state.stopWatchTime.getHours(), 
		// 	this.state.stopWatchTime.getMinutes(), 
		// 	this.state.stopWatchTime.getSeconds(),
		// 	this.state.stopWatchTime.getMilliseconds());

		this.setState({
			stopWatchTime: new Date(),
			running: true
		});
	}

	handleStartStop(_event?: any) {
		if (!this.props.start) {
			return;
		}

		if (this.state.running) {
			clearInterval(this.state.timerID);

			this.setState({
				running: false
			});
		} else if (this.props.mode === Mode.default || this.props.mode === undefined) {
			this.state.timerID = setInterval(
				() => this.tick(),
				1000
			);

			this.setState({
				running: true
			});
		}
	}

	handleStopWatch(_event?: any) {
		if (this.state.running) {
			clearInterval(this.state.timerID);

			this.setState({
				running: false
			});
		} else {
			this.setState({
				running: true
			});

			let stopWatchTime = new Date();
			stopWatchTime.setHours(0);
			stopWatchTime.setMinutes(0);
			stopWatchTime.setSeconds(0);
			stopWatchTime.setMilliseconds(0);

			this.setState({
				stopWatchTime: stopWatchTime,
				running: true
			});
			
			this.state.timerID = setInterval(
				() => this.tickStopWatch(),
				1
			);
		}
	}

	componentDidMount() {
		if(this.props.mode === Mode.timestamp) {	
			return;
		}

		if (this.props.mode === Mode.stopwatch) {
			let stopWatchTime = new Date();
			stopWatchTime.setHours(0);
			stopWatchTime.setMinutes(0);
			stopWatchTime.setSeconds(0);
			stopWatchTime.setMilliseconds(0);

			this.setState({
				stopWatchTime: stopWatchTime,
				running: true
			});
			return;
		}

		if(this.props.start && (this.props.mode === Mode.default || this.props.mode === undefined)) {
			this.setState({
				running: true
			});
			this.handleStartStop();
		} else {
			this.setState({
				running: false
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.timerID);
	}

	render() {
		if (!this.props.show) {
			return (<div className='grid-item'/>);
		}
		
		let startStopButton:any;
		if(this.props.mode === Mode.stopwatch) {
			startStopButton = <button onClick={this.handleStopWatch.bind(this)}>{this.state.running ? 'Stop' : 'Start'}</button>											
		}

		let h = this.state.stopWatchTime.getHours();
		let m = this.state.stopWatchTime.getMinutes();
		let s = this.state.stopWatchTime.getSeconds();
		let ms = this.state.stopWatchTime.getMilliseconds();

		return (
			<div>
				<div className='grid-item'>
					{this.props.mode === Mode.default || this.props.mode === undefined ? this.state.date.toLocaleTimeString() : 
`0${h - h}:${m.toString().length == 1 ? "0" + m : m}:${s.toString().length == 1 ? "0" + s : s}:${ms.toString().length == 2 ? "0" + ms : ms}`}
				</div>
				<div className='grid-item'>
					{startStopButton}
					</div>
			</div>
		);
	}
}

export default Clock;
export { Mode };