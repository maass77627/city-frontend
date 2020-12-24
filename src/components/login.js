import React from 'react'
import {connect} from 'react-redux'
 import {addUsers} from '../actions/addUsers'
 import App from '../App';


class Login extends React.Component {

    state = {username: ''}


    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUsers(this.state)
        // console.log(this.state)
       
    }

    

    render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
            <center>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            {/* <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            <label htmlFor="password">Password</label> */}
          </div>
          <input type="submit" value="Login" />
          </center>
        </form>
        <App username={this.state.username} />
      </div>
    );
  };
}

  
  export default connect(null, {addUsers})(Login)