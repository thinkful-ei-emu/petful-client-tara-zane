import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {NavLink, Route} from 'react-router-dom';
import AdoptionPage from './Pages/AdoptionPage';
import AdoptedPetsPage from './Pages/AdoptedPetsPage';

class App extends React.Component {

render(){
  return (
    <main>
    <nav>
      <NavLink to="/adopted">Our adopted pets</NavLink>
      <NavLink to="/adoption">Adopt a pet</NavLink>
    </nav>
    <div className="App">
     <Route exact path='/' component={LandingPage}/>
     <Route path='/adoption' component={AdoptionPage}/>
     <Route path='/adopted' component={AdoptedPetsPage}/>
    </div>
    </main>

  );
}
}

export default App;
