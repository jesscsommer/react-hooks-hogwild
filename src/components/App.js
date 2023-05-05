import React, { useState } from "react";
import Nav from "./Nav";
import HogControls from "./HogControls"
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {

	const [isGreased, setIsGreased] = useState(false)
	const [invisibleHogs, setInvisibleHogs] = useState([])

	const changeGreased = () => {
		setIsGreased(currentValue => !currentValue)
	}

	const changeInvisibleHogs = (newHog) => {
		setInvisibleHogs([...invisibleHogs, newHog])
	}

	const filteredHogs = hogs.filter(hog => isGreased === false || hog.greased === isGreased)
	const visibleHogs = filteredHogs.filter(hog => invisibleHogs.includes(hog) === false)
	// create a state to track invisible hogs that you add to when a hog's hide me btn is clicked --> you'll need to pass it down into hog card ultimately

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

	const sortedHogs = visibleHogs.sort(compareHogs)

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<HogControls changeGreased={changeGreased} changeSortBy={changeSortBy} /> 
			</div>
			<div className="sixteen wide column centered">
				<HogList hogs={sortedHogs} changeInvisibleHogs={changeInvisibleHogs} /> 
			</div>
		</div>
	);
}

export default App;
