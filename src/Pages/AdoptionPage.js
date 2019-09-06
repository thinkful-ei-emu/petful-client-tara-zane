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
  render(){
    if(this.state.cats !==null){
      
    
   return(
     <div>
       <Header/>
       <Pets cats={this.state.cats} dogs={this.state.dogs}/>
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