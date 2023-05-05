import HogCard from "./HogCard"
import {v4 as uuid} from "uuid"

const HogList = ({ sortedHogs, hideHogs }) => {
    return (
      <div className="ui three stackable cards">
        {sortedHogs.map(hog => 
        <HogCard key={uuid()} hog={hog} hideHogs={hideHogs} highestMedalAchieved={hog['highest medal achieved']}/>)}
      </div>
    )
}

export default HogList
