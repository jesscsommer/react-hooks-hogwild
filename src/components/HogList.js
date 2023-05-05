import HogCard from "./HogCard"

const HogList = ({ hogs }) => {
    return (
      <div className="ui three stackable cards">
        {hogs.map(hog => <HogCard key={hog.name} hog={hog} highestMedalAchieved={hog['highest medal achieved']}/>)}
      </div>
    )
}

export default HogList