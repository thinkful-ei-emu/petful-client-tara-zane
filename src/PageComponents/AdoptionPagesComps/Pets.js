import React from "react";

export default function Pets(props) {


  let cats= props.cats;
  let dogs=props.dogs
  
  
  console.log(cats)

 if(props.cats.length>0&&dogs.length>0){
 console.log(cats[0].name)

   return (<div>
     <section>
     <img src={props.cats[0].imageURL} alt={props.cats[0].imageDescription}/>
     
     <p>{cats[0].name}</p>
     <p>{cats[0].sex}</p>
     <p>{cats[0].breed}</p>
     <p>{cats[0].age}</p>
     <p>{cats[0].story}</p>
     <button>Adopt!</button>
     </section>
     <section>
     <img src={dogs[0].imageURL} alt={props.dogs[0].imageDescription}/>
     
     <p>{dogs[0].name}</p>
     <p>{dogs[0].sex}</p>
     <p>{dogs[0].breed}</p>
     <p>{dogs[0].age}</p>
     <p>{dogs[0].story}</p>
     <button>Adopt!</button>
     </section>

   </div>)
 }
 else if(props.cats.length>0){
  console.log(cats[0].name)
 
    return (
      <section>
      <img src={props.cats[0].imageURL} alt={props.cats[0].imageDescription}/>
      
      <p>{cats[0].name}</p>
      <p>{cats[0].sex}</p>
      <p>{cats[0].breed}</p>
      <p>{cats[0].age}</p>
      <p>{cats[0].story}</p>
      <button>Adopt!</button>
      </section>)}

      else if(dogs.length>0){
        return(
          <section>
     <img src={dogs[0].imageURL} alt={props.dogs[0].imageDescription}/>
     
     <p>{dogs[0].name}</p>
     <p>{dogs[0].sex}</p>
     <p>{dogs[0].breed}</p>
     <p>{dogs[0].age}</p>
     <p>{dogs[0].story}</p>
     <button>Adopt!</button>
     </section>

        )
      }
 
 else{
   return(
     <div>

     </div>
   )
 }
 
}

