import React, { useState } from "react";
import "./app.css";
import Addendum from "./addendum";
import Spinner from "./page-components/spinner";
import Clock, { Modes } from "./page-components/clock";

const App = () => {
	const [data, setData] = useState<string>();
	const [isInitialized, setIsInitialized] = useState<boolean>();

	const apiGet = async () => {
		setData(undefined);
		setIsInitialized(true);

		const response = await fetch("http://localhost:9090/demo");
		const json = await response.text();

		setData(json);
		setIsInitialized(false);
	}
	 
	return (
		<>
			<button onClick={apiGet}>Load Greeting</button>
			<div className='grid'>
				<div className='grid-item'>
					<Spinner isInitialized={isInitialized} customStyles={{height: '30px', width: '30px'}}/> 
					{data}
				</div>
			</div>
			<Addendum/>
			<div className='grid'>
				<Clock show={true} start={true} mode={Modes.stopwatch}/>
				{/* {data != null ? <Clock show={true} mode={Modes.timestamp}/> : null } */}
			</div>
		</>
	);
}

export default App;