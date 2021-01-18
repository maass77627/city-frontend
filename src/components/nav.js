import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '20px',
  borderRadius: '25px',
  margin: '0px 50px 10px 120px',
  background: 'grey',
  fontSize: 'medium',
  textDecoration: 'none',
  color: 'white',
  fontWeight: '800'
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >login</NavLink>
        <NavLink
          to="/mycities"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >My Cities</NavLink>
        <NavLink
          to="/form"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >New City</NavLink>
        <NavLink
          to="/cities"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >All Cities</NavLink>
        <NavLink
          to="/bucketlist"
          exact
          style={link}
          activeStyle={{
            background: 'pink'
          }}
        >bucketlist</NavLink>
      </div>
    )
    }}
  


export default Navbar