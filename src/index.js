import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import cityReducer from './reducers/cityReducer'
import MyCities from './components/MyCities'
import Navbar from './components/nav'
import CitiesInput from './components/CitiesInput'
import CitiesContainer from './containers/CitiesContainer'
import Login from './components/login'
import Home from './components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(cityReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render( 
  <Provider store={store}> 
  <Router>
    <div>
   <Navbar/>
    <Route exact path="/" component={Login} />
    <Route exact path="/form" component={CitiesInput} />
    <Route exact path="/cities" component={CitiesContainer} />
    <Route exact path="/bucketlist" component={Home} />
    <Route exact path="/mycities" component={MyCities} />
     </div>
  </Router>), 
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
