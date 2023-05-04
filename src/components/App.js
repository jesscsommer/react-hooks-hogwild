import React, { useState } from "react";
import Nav from "./Nav";
import HogControls from "./HogControls"
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {

	const [isGreased, setIsGreased] = useState(false)

	const changeGreased = () => {
		setIsGreased(currentValue => !currentValue)
	}

	const filteredHogs = hogs.filter(hog => isGreased === false || hog.greased === isGreased)

	return (
		<div className="App">
			<Nav />
			<HogControls changeGreased={changeGreased} /> 
			<HogList hogs={filteredHogs} /> 
		</div>
	);
}

export default App;
