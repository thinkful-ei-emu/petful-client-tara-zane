import React from 'react';
import Header from'../PageComponents/LandingPagesComps/Header'
import CatServices from '../services/catservice'
import DogServices from '../services/dogsservice'
import Pets from '../PageComponents/AdoptionPagesComps/Pets'



export default class AdoptionPage extends React.Component{
 state={
   cats:[],
   dogs:[]
 }

 
 

 componentDidMount(){
   CatServices.getCat().then(res=>this.setState({cats:res},()=>{ console.log(this.state)}))
   DogServices.getDog().then(res=>this.setState({dogs:res}))
  

 }
  render(){
    if(this.state.cats !==null){
      
    
   return(
     <div>
       <Header/>
       <Pets cats={this.state.cats} dogs={this.state.dogs}/>

     </div>
   )
 }
 else{
   return(
     <div>

     </div>
   )
 }
}

}