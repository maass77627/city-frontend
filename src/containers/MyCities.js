// const MyCities = (props) => {

//     return (
//         <div className="mycits">
//           {props.cities.map(city => <div id="a"key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</div>)}
            

//         </div>
//     )}

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MyCities extends React.Component {

  



    render() {
    return(
        <div className="mycities">
            
           {this.props.mycities.map(city => <div id="a"key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</div>)}
        

        </div>
    )
}
}
 
const mapStateToProps = (state) => {
    //console.log(state)
      return {
      mycities: state.username.cities
      
      }
    }


export default connect(mapStateToProps, null)(MyCities)
