import React from 'react'
import Cities from '../components/Cities'
import CitiesInput from '../components/CitiesInput'
import {connect} from 'react-redux'
import {fetchCities} from '../actions/fetchCities'


 class CitiesContainer extends React.Component {

    componentDidMount() {
        
        this.props.fetchCities()
     
         }
         

    render() {
        return(
            
            <div className="cc">
                CitiesContainer
                <CitiesInput/>
                <Cities cities={this.props.cities}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log(state)
      return {
      cities: state.cities
      
      }
    }

export default connect(mapStateToProps, {fetchCities})(CitiesContainer)