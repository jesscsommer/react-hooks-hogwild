import { useState } from 'react'

const HogCard = ({ hog, highestMedalAchieved, changeInvisibleHogs }) => {
    const {name, image, specialty, weight, greased} = hog

    const [clickedHog, setClickedHog] = useState('')

    const detailsClass = clickedHog === hog ? '' : 'hidden'
    
    const handleClick = () => {
        clickedHog === hog ? setClickedHog('') : setClickedHog(hog)
    }

    return (
    <div onClick={handleClick} className='ui card eight wide column pigTile'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <button onClick={() => changeInvisibleHogs(hog)}>Hide me!</button>
        <div className={detailsClass}>
            <h3>Additional details</h3>
            <ul>
                <li>Specialty: {specialty}</li> 
                <li>Weight: {weight}</li>
                <li>Greased: {greased ? 'Yes, of course' : 'No way'}</li>
                <li>Highest Medal Achieved: {highestMedalAchieved}</li>
            </ul>
        </div>
    </div>
    )
}

export default HogCard