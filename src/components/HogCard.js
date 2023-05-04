const HogCard = ({ name, image, specialty, weight, greased, highestMedalAchieved }) => {

    return (
    <div className="pigTile">
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <h3>Specialty: {specialty}</h3> 
        <h3>Weight: {weight}</h3>
        <h3>Greased: {greased ? 'Yes, of course' : 'No way'}</h3>
        <h3>Highest Medal Achieved: {highestMedalAchieved}</h3>
    </div>
    )
}

export default HogCard