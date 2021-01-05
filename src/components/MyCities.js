import React from 'react'
// import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MyCities extends React.Component {

    // constructor(props) {
    //     super()
    //     this.state = {
    //         mycities: props.mycities,
    //     }
    // }

    render() {
    return(
        <div className="mycities">
            {this.props.mycities.map(city => <div id="a" key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</div>)}
        </div>
    )
}
}
 
const mapStateToProps = (state) => {
      return {
      mycities: state.mycities
      }
}

    MyCities.defaultProps = {name: 'juno', state: 'alaska', description: 'cold'}

    export default connect(mapStateToProps, null)(MyCities)


//     import React from 'react'

// const MyCities = (props) => {
    
//     return(
//         <div className="mycities">
//            {props.mycities.map(city => <div id="a"key={city.id}>{city.name},<br></br> {city.state},<br></br> {city.description}</div>)}
//         </div>
//     )

// }
// export default MyCities

// MyCities.defaultProps = {name: 'juno', state: 'alaska', description: 'cold'}
