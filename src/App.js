
//import logo from './logo.svg';
import {connect} from 'react-redux'
import React from 'react'
import './App.css';
import { fetchCities } from './actions/fetchCities';

export default class App extends React.Component {

  componentDidMount() {
    this.props.fetchCities({type: 'FETCH_CITIES'})
    // fetch('http://localhost:3002/cities')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }

  render() {
  return (
    <div className="App">
      App
    </div>
  );
}
}
//export default App;

const mapStateToProps = (state) => {
  return {
  accounts: state.accounts
  }
}

export default connect(mapStateToProps, fetchCities)(App);
