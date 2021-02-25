import React from 'react'

import {connect} from 'react-redux'

  class Cities extends React.Component {

    state = {
      bucketItems: []
    }

    mybucketlist = () => {

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
        <div  onClick={this.handleClick} id="c" className={city.id} key={city.id}> <center> {city.name}, {city.state},<br></br> <img src={city.imgUrl} alt=""/> </center> <br></br> {city.description} </div>)}

        </div>
          
    )

        }
        
    }
export default connect(state => ({ bucketlist: state.bucketlist }))(Cities);

