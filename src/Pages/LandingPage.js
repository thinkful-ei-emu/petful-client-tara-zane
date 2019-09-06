import React from 'react';
import Header from '../PageComponents/LandingPagesComps/Header'
import Picture from '../PageComponents/LandingPagesComps/LandingImage'
import Description from '../PageComponents/LandingPagesComps/Description';
import {Link} from 'react-router-dom'

function LandingPage(){
  return (
    <div>
      <Header/>
      <Picture/>
      <Description/>

      <Link to='/adoption'><button>Adopt Now!</button></Link>
      
      
    </div>
  )
}
export default LandingPage;