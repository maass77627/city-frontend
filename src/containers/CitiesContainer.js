
import React from 'react'
import Cities from '../components/Cities'
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
              
            <Cities allcities={this.props.allcities}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log(state)
      return {
      allcities: state.allcities
      
      }
    }

export default connect(mapStateToProps, {fetchCities})(CitiesContainer)