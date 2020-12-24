import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import cityReducer from './reducers/cityReducer'
import Home from './components/home'
import Navbar from './components/nav'
import CitiesInput from './components/CitiesInput'
import CitiesContainer from './containers/CitiesContainer'
import Login from './components/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import fetchCities from './actions/fetchCities';

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(cityReducer, composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(composeEnhancers, applyMiddleware(thunk))


ReactDOM.render( 
  

     //Provider connects app and children of app to store
  <Provider store={store}> 
  <Router>
    <div>
    <CitiesContainer/>
    <Navbar/>
    <Route path="/" component={App} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/form" component={CitiesInput} />
   
    <Route exact path="/login" component={Login} />
      
      </div>
  </Router>), 
    
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
