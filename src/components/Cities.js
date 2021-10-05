
import React from 'react'

import {connect} from 'react-redux'
import { FaCarSide } from 'react-icons/fa';
import Description from '../components/Description'
  class Cities extends React.Component {

    state = {
      bucketItems: []
    }

    mybucketlist = () => {

    }

    handleClickTwo = (value) => {
      //  e.preventDefault();
     console.log(value);
     <Description/>
    

    }

   
handleClick = (e) => {
        e.preventDefault();
        
        let integer = parseInt(e.currentTarget.className, 10);
        let newcity = this.props.allcities.find(city => city.id === integer);
        
        this.props.dispatch({type: 'ADD_BUCKETLIST', payload: newcity})
        
        this.setState({
          bucketItems: [
            ...this.state.bucketItems, newcity
          ]
        })

     
    }
    
   render() {
      
  return( 
        <div className="cits" >
        
        {this.props.allcities.map(city => 
        
        <div  onClick={this.handleClick} id="c" className={city.id} key={city.id}> 
        <button className="heart" onClick={this.handleClickTwo(city.id)}><FaCarSide color="#006666" size="20px" /></button> <center> {city.name},<br></br> {city.state},<br></br> <img src={city.imgUrl} alt=""/> </center> <br></br> <center>{city.description} <br></br> </center> 
        </div>)}
       
        </div>
          
    )

   }
        
    }
export default connect(state => ({ bucketlist: state.bucketlist }))(Cities);