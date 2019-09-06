import React from 'react';
import Header from '../PageComponents/LandingPagesComps/Header'
import Picture from '../PageComponents/LandingPagesComps/LandingImage'
import Description from '../PageComponents/LandingPagesComps/Description';


function LandingPage(){
  return (
    <div>
      <Header/>
      <Picture/>
      <Description/>

      <button>Adopt Now!</button>
      
      
    </div>
  )
}
export default LandingPage;