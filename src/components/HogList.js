import HogCard from "./HogCard"

const HogList = ({ hogs }) => {
    return (
      <div className="ui grid container">
        {hogs.map(hog => <HogCard key={hog.name} {...hog} highestMedalAchieved={hog['highest medal achieved']}/>)}
      </div>
    )
}

export default HogList