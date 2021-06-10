import React from 'react'
import {connect} from 'react-redux'
import {addUsers} from '../actions/addUsers'
import App from '../App';

class Login extends React.Component {

  state = {username: '', password: ''}


  handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
  }

  handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        let loginn = document.getElementById("4")
        loginn.style.display = "none";
        this.props.addUsers(this.state)
  }

    render() {
    return (
      <div id="4" className="login">
        <form onSubmit={this.handleSubmit}>
            <center>
          <div>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
            <label htmlFor="username">Username</label>
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
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