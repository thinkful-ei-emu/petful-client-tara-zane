import React from 'react';
import Header from'../PageComponents/LandingPagesComps/Header'
import CatServices from '../services/catservice'
import DogServices from '../services/dogsservice'
import Pets from '../PageComponents/AdoptionPagesComps/Pets'
import UserServices from '../services/usersservice';
import UserQueue from '../PageComponents/UserQueue/UserQueue';

export default class AdoptionPage extends React.Component{
 state={
  cats:[],
  dogs:[],
  users: []
 }

 componentDidMount(){
   CatServices.getCat().then(res=>this.setState({cats:res},()=>{ console.log(this.state)}))
   DogServices.getDog().then(res=>this.setState({dogs:res}));
   UserServices.getUser().then(res=>this.setState({users:res}));

   this.interval = setInterval(this.switchUser(), 1000);
 }

 switchUser() {
   UserServices.switchUser().then(res=>this.setState({users:res}));
 }
 removeDog=(e)=>{
   DogServices.deleteDog()
  let oneLess=[...this.state.dogs]
  oneLess.shift();
  console.log(this.switchUser)
  this.switchUser();
  
  
  this.setState({dogs:oneLess})
 
 }

 removeCat=(e)=>{
  CatServices.deleteCat()
 let oneLess=[...this.state.cats]
 oneLess.shift();
 this.switchUser();
 
 
 this.setState({cats:oneLess})


}

 
  render(){
    if(this.state.cats !==null){
      
    
   return(
     <div>
       <Header/>
       <Pets cats={this.state.cats} dogs={this.state.dogs} ad={this.removeDog} ac={this.removeCat} />
       <UserQueue users={this.state.users} />

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