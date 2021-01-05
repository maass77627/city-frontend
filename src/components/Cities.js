import React from 'react'
// import addPicRef from '../actions/addPicRef'
const Cities = (props) => {

    // componentDidMount(props) {
    //     {props.allcities.map(city => addPicRefs(city))}
       
    // }
    
    return(
        <div className="cits" >,
        {props.allcities.map(city => 
        <div  id="c" className={city.id} key={city.id}> <center> {city.name}, {city.state},<br></br> <img src={city.imgUrl} /> </center> <br></br> {city.description} </div>)}
        </div>
    )
    }
export default Cities
//<img src={city.image} />,

//functional component must pass in props as argument

