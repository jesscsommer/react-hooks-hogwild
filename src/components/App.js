import React from "react";
import Nav from "./Nav";
import HogControls from "./HogControls"
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogControls /> 
			<HogList hogs={hogs} /> 
		</div>
	);
}

export default App;
