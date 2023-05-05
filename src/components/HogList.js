import HogCard from "./HogCard"

const HogList = ({ hogs, changeInvisibleHogs }) => {
    return (
      <div className="ui three stackable cards">
        {hogs.map(hog => <HogCard key={hog.name} hog={hog} changeInvisibleHogs={changeInvisibleHogs} highestMedalAchieved={hog['highest medal achieved']}/>)}
      </div>
    )
}

export default HogList