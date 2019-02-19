import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../src/Components/Header/Header'
import routes from './routes'
import store from './ducks/store'
import './App.css';

class App extends Component {
  render() {
       
    return (
      <Provider store={store}>
        <Router>
           <div className="App">
             {routes}
           </div>
         </Router>
     </Provider>
    );
  }
}

export default App;
