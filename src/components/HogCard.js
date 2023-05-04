import { useState } from 'react'

const HogCard = ({ hog, highestMedalAchieved }) => {
    const {name, image, specialty, weight, greased} = hog

    const [clickedHog, setClickedHog] = useState('')

    const detailsClass = clickedHog === hog ? '' : 'hidden'
    
    const handleClick = () => {
        clickedHog === hog ? setClickedHog('') : setClickedHog(hog)
    }

    return (
    <div onClick={handleClick} className='pigTile'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <ul className={detailsClass}>
        <h3>Additional details</h3>
            <li>Specialty: {specialty}</li> 
            <li>Weight: {weight}</li>
            <li>Greased: {greased ? 'Yes, of course' : 'No way'}</li>
            <li>Highest Medal Achieved: {highestMedalAchieved}</li>
        </ul>
    </div>
    )
}

export default HogCard