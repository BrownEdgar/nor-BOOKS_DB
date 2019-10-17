import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddBooks from './components/AddBooks';
import Register from './components/Register';
import Login from './components/Login';
import Menu from './components/Menu';
import Test from './components/test';

class App extends Component {
  render () {
    return (
 
    <div className="App">
   <h1>Create Your Books DB</h1>

      <Router>  
      <Menu />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route  exact  path="/api/addbooks" component={AddBooks} />
      </Router>  
    </div>
    
  );
    }
  }

export default App;
