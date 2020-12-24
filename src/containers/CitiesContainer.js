
import React from 'react'
import Cities from '../components/Cities'
//import MyCities from '../containers/MyCities'
//import CitiesInput from '../components/CitiesInput'
import {connect} from 'react-redux'
import {fetchCities} from '../actions/fetchCities'


 class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
        // <Cities allcities={this.props.allcities}/>
    }
        
         

    render() {
        return(
            
            <div className="cc">
                CitiesContainer
                {/* <MyCities cities={this.props.cities}/> */}
            <Cities allcities={this.props.allcities}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    debugger
      return {
          
      allcities: state.allcities,
    //   cities: state.username.cities,
      
      }
    }

export default connect(mapStateToProps, {fetchCities})(CitiesContainer)