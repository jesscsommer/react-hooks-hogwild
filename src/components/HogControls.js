const HogControls = ({ changeGreased, changeSortBy }) => {
    return (
        <div className="filterWrapper">
            <h3>Filter hogs</h3>
          
            <input onChange={changeGreased} type='checkbox' name='greased' />
            <label htmlFor='greased'>Greased?</label>

            <select onChange={(e) => changeSortBy(e.target.value)} defaultValue='Sort by ...'>
                <option disabled>Sort by ...</option>
                <option>name</option>
                <option>weight</option>
            </select>
        </div>        
    )
}

export default HogControls