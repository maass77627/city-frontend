import React from 'react'
// import { AnimationWrapper } from 'react-hover-animation'
import { connect } from 'react-redux'
import fetchPicTwo from '../actions/fetchPicTwo'
import addPicRef from '../actions/addPicRef'
import Counter from '../components/Counter'

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

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        
    }
   

    render() {
       
    return(
       
        <div className="mycities">
            {/* <Counter/> */}
            {this.props.mycities.map(city =>  <div  style={{backgroundColor: "lightblue"}}  id="c" key={city.id}> {city.name},<br></br> {city.state},<br></br> <img src={city.imgUrl} alt=""/> <br></br> {city.description} <br></br> <button>hi</button></div>)}
        {/* <button className="likeBtn">
           
        </button> */}
        </div>
        // onClick={this.handleClick}
    )
}
}
 
const mapStateToProps = (state) => {
      return {
      mycities: state.mycities,
      users: state.users
    }
}

    MyCities.defaultProps = {name: 'juno', state: 'alaska', description: 'cold'}
  
   export default connect(mapStateToProps, {fetchPicTwo})(MyCities)


    
