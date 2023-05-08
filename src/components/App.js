import React, { useState } from "react";
import Nav from "./Nav";
import HogControls from "./HogControls"
import HogList from "./HogList"
import HogForm from "./HogForm"

import hogs from "../porkers_data";

function App() {

	//TODO: Create a helper fn to add a new hog 
	//TODO: Create a new form component

	//! State variables

	const [allHogs, setAllHogs] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [sortBy, setSortBy] = useState('')


	//! Setter functions 

	const changeGreased = () => {
		setIsGreased(currentValue => !currentValue)
	}

	const addHog = (newHog) => {
		setAllHogs(allHogs => [...allHogs, newHog])
	}

	const hideHogs = (hiddenHog) => {
		setAllHogs(allHogs => allHogs.filter(hog => hog !== hiddenHog))
	}

	const changeSortBy = (newSort) => {
		setSortBy(newSort)
	}

	//! Helper functions and variables

	const filteredHogs = allHogs.filter(hog => isGreased === false || hog.greased === isGreased)

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

	//! JSX return 

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<HogForm addHog={addHog} />
			</div>
			<div className="sixteen wide column centered">
				<HogControls changeGreased={changeGreased} changeSortBy={changeSortBy} /> 
			</div>
			<div className="sixteen wide column centered">
				<HogList sortedHogs={sortedHogs} hideHogs={hideHogs} /> 
			</div>
		</div>
	);
}

export default App;
