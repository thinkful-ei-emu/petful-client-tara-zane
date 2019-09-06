import React from "react";
import '../../CSS/Pets.css'

export default function Pets(props) {


  let cats= props.cats;
  let dogs=props.dogs
  
  
  console.log(cats)

 if(props.cats.length>0&&dogs.length>0){
 console.log(cats[0].name)

   return (<div className='pet-container'>
     <section>
       <h2>Cats</h2>
     <img className="adopted-animal-pic" src={props.cats[0].imageURL} alt={props.cats[0].imageDescription}/>
     
     <p>Name:{cats[0].name}</p>
     <p>Sex:{cats[0].sex}</p>
     <p>Breed:{cats[0].breed}</p>
     <p>Age:{cats[0].age}</p>
     <p>Story:{cats[0].story}</p>
     <button onClick={()=>props.ac()}>Adopt!</button>
     </section>
     <section>
       <h2>Dogs</h2>
     <img className="adopted-animal-pic" src={dogs[0].imageURL} alt={props.dogs[0].imageDescription}/>
     
     <p>Name:{dogs[0].name}</p>
     <p>Sex:{dogs[0].sex}</p>
     <p>Breed:{dogs[0].breed}</p>
     <p>Age:{dogs[0].age}</p>
     <p>Story:{dogs[0].story}</p>
     <button onClick={(e)=>props.ad(e)}>Adopt!</button>
     </section>

   </div>)
 }
 else if(props.cats.length>0){
  console.log(cats[0].name)
 
    return (
      <section>
        <h2>Cats</h2>
      <img className='adopted-animal-pic' src={props.cats[0].imageURL} alt={props.cats[0].imageDescription}/>
      
      <p>Name:{cats[0].name}</p>
      <p>Sex:{cats[0].sex}</p>
      <p>Breed:{cats[0].breed}</p>
      <p>Age:{cats[0].age}</p>
      <p>Story:{cats[0].story}</p>
      <button onClick={()=>props.ac()}>Adopt!</button>
      </section>)}

      else if(dogs.length>0){
        return(
          <section>
            <h2>Dogs</h2>
     <img className='adopted-animal-pic' src={dogs[0].imageURL} alt={props.dogs[0].imageDescription}/>
     
     <p>Name:{dogs[0].name}</p>
     <p>Sex:{dogs[0].sex}</p>
     <p>Breed:{dogs[0].breed}</p>
     <p>Age:{dogs[0].age}</p>
     <p>Story:{dogs[0].story}</p>
     <button onClick={()=>props.ad()}>Adopt!</button>
     </section>

        )
      }
 
 else{
   return(
     <div>
<h1>Good Job! All of our animals Have Homes!</h1>
     </div>
   )
 }
 
}

