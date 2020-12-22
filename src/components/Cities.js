import React from 'react'

const Cities = (props) => {
    console.log(props)

    return(
        <div className="cits">
           {props.cities.map(city => <li key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</li>)}
        </div>
    )

}

export default Cities

//functional component must pass in props as argument

