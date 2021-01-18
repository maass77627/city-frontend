import React from 'react'
import {connect} from 'react-redux'
import {addUsers} from '../actions/addUsers'
import App from '../App';

class Login extends React.Component {

  state = {username: '', password: '', id: ''}


  handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
  }

  handleSubmit = (event) => {
        event.preventDefault()
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
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
            <label htmlFor="username">Username</label>
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