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

	const [sortBy, setSortBy] = useState('')

	const changeSortBy = (newSort) => {
		setSortBy(newSort)
	}

	const compareHogs = (hog1, hog2) => {
		if (hog1[sortBy] < hog2[sortBy]){
			return -1
		}
		if (hog1[sortBy] > hog2[sortBy]) {
			return 1
		} 
		return 0
	}

	const sortedHogs = filteredHogs.sort(compareHogs)

	return (
		<div className="App">
			<Nav />
			<HogControls changeGreased={changeGreased} changeSortBy={changeSortBy} /> 
			<HogList hogs={sortedHogs} /> 
		</div>
	);
}

export default App;
