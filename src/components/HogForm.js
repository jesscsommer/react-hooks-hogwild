import { useState } from 'react'

const HogForm = ({ addHog }) => {

    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        greased: false,
        weight: 0,
        'highest medal achieved': '',
        image: ''
    })

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setFormData({...formData,
            [e.target.name]: e.target.checked})
        } else {
            setFormData({...formData,
                [e.target.name]: e.target.value
            })
        } 
    }

    // const validateData = () => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        addHog(formData)
        setFormData({
            name: '',
            specialty: '',
            greased: false,
            weight: '',
            'highest medal achieved': '',
            image: ''
        })
    }

    return (
        <div className='ui card eight wide column centered'>
            <h3>Add a hog</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" value={formData.name} placeholder='Name'/>
                <input onChange={handleChange} name="specialty" value={formData.specialty} placeholder='Specialty'/>
                <label htmlFor="greased">
                    <input onChange={handleChange} name="greased" type="checkbox" checked={formData.greased} />
                    Greased?
                </label>
                <input onChange={handleChange} name='weight' value={formData.weight} placeholder='Weight' type='number' step='0.1' />
                <input onChange={handleChange} name="highest medal achieved" value={formData["highest medal achieved"]} placeholder='Highest medal'/>
                <input onChange={handleChange} name="image" value={formData.image} placeholder='Image'/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default HogForm

// {
//     name: "Babe",
//     specialty: "Being incredibly cute",
//     greased: false,
//     weight: 2.0,
//     "highest medal achieved": "bronze",
//     image:
//       "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
//   }