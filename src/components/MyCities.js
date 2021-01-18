import React from 'react'
import { connect } from 'react-redux'
import fetchPicTwo from '../actions/fetchPicTwo'
import addPicRef from '../actions/addPicRef'

export class MyCities extends React.Component {

    componentDidMount() {
        console.log("update")
            if (this.props.mycities.length > 0) {
            this.props.mycities.forEach(city => {
                addPicRef(city)
               .then(picRef => this.props.fetchPicTwo(city, picRef))
             })
            }
    }
   

    render() {
        
    return(
        
        <div className="mycities">
            {this.props.mycities.map(city =>  <div id="a" key={city.id}>{city.name},<br></br> {city.state},<br></br> <img src={city.imgUrl} alt=""/> <br></br> {city.description}</div>)}
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
  
   export default connect(mapStateToProps, {fetchPicTwo})(MyCities)


    
