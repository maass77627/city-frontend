//import logo from './logo.svg';
import React from 'react'
import './App.css';

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3002/cities')
    .then(response => response.json())
    .then(data => console.log(data))
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
