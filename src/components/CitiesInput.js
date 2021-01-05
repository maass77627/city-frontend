import React from 'react'
import {connect} from 'react-redux'
import {addCities} from '../actions/addCities'
// import {MyCities} from '../components/MyCities'

class CitiesInput extends React.Component {

    state = {name: '', state: '', description: ''}

    // componentDidMount() {
    //     this.props.addCities()
    // }


    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCities(this.state)
       
    }




    render() {
        return(
            
            <div className="f">
                <form onSubmit={this.handleSubmit}>
                
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
                <input type="text" placeholder="state" name="state" value={this.state.state} onChange={this.handleChange}></input><br></br><br></br>
                <input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>
                <input type="submit"/>
                </form>
                {/* <MyCities mycities={this.props.mycities}/> */}
            </div>
        )
    }


   
}

// const mapStateToProps = (state) => {
//     return {
//    mycities: state.username.cities,
//      }
//   }

export default connect(null, {addCities})(CitiesInput)