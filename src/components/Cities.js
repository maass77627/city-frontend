import React from 'react'

const Cities = (props) => {
    console.log(props)

    

    return(
        <div className="cits">
           {props.allcities.map(city => <div id="c"key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</div>)}
        </div>
    )

}

export default Cities

//functional component must pass in props as argument

