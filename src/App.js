import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {Route} from 'react-router-dom';

class App extends React.Component {

render(){
  return (
    <div className="App">
     <Route path='/' component={LandingPage}/>
    </div>
  );
}
}

export default App;
