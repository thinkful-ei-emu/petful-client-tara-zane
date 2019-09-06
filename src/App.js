import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {Route} from 'react-router-dom';
import CatServices from './services/catservice'
import AdoptionPage from './Pages/AdoptionPage';

class App extends React.Component {

render(){
  return (
    <div className="App">
     <Route exact path='/' component={LandingPage}/>
     <Route path='/adoption' component ={AdoptionPage}/>
    </div>
  );
}
}

export default App;
