import React from 'react'

const Cities = (props) => {
    console.log(props.allcities)

  return(
        <div className="cits" >,
        {props.allcities.map(city => 
        <div id="c" className={city.id} key={city.id}> <center> {city.name}, {city.state},<br></br> <img src={city.imgUrl} alt=""/> </center> <br></br> {city.description} </div>)}
        </div>
    )
    }
export default Cities


