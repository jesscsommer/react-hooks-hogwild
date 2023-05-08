import { useState } from 'react'

const HogCard = ({ hog, highestMedalAchieved, hideHogs }) => {
    const {name, image, specialty, weight, greased} = hog

    const [isClicked, setIsClicked] = useState(false)
    
    const handleClick = () => {
        setIsClicked(current => !current)
    }

    return (
    <div onClick={handleClick} className='ui card eight wide column pigTile'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <button onClick={() => hideHogs(hog)}>Hide me!</button>
        {isClicked ? 
        <div>
            <h3>Additional details</h3>
            <ul>
                <li>Specialty: {specialty}</li> 
                <li>Weight: {weight}</li>
                <li>Greased: {greased ? 'Yes, of course' : 'No way'}</li>
                <li>Highest Medal Achieved: {highestMedalAchieved}</li>
            </ul>
        </div> :
        null
        }
       
    </div>
    )
}

export default HogCard