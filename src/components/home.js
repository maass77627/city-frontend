import React from 'react';
import {connect} from 'react-redux'

 class Home extends React.Component {

render() {
    
  return (
    
      <div className="bucket" >
      
        {this.props.bucketlist.map(city => 
        <div   id="d" className={city.id} key={city.id}> <center> {city.name}, {city.state},<br></br> <img src={city.imgUrl} alt=""/> </center> <br></br> {city.description} </div>)}
       
        </div>

  )}
  }


const mapStateToProps = (state) => {
  return {
 bucketlist: state.bucketlist,
 allcities: state.allcities
   }
}
Home.defaultProps = {}

export default connect(mapStateToProps)(Home)
