import React from 'react'
import Cities from '../components/Cities'
import {connect} from 'react-redux'
import {fetchCities} from '../actions/fetchCities'
import {fetchPic} from '../actions/fetchPic'
import addPicRef from '../actions/addPicRef'

class CitiesContainer extends React.Component {
    

    componentDidMount() {
        if (this.props.allcities.length === 0){this.props.fetchCities()}
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allcities.length === 0 && this.props.allcities.length > 0) {
            this.props.allcities.forEach(city => {
                addPicRef(city)
               .then(picRef => this.props.fetchPic(city, picRef))
             })
        }
    }
        
    render() {
        return(
            <div className="cc">
               <Cities allcities={this.props.allcities}/>
                </div>
        )}}

const mapStateToProps = (state) => {
      return {
     allcities: state.allcities,
       }
    } 

export default connect(mapStateToProps, {fetchCities, fetchPic})(CitiesContainer)

