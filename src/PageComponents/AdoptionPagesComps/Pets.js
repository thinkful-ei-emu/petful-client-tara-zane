import React from "react";

export default function Pets(props) {


  let cats= props.cats
  console.log(cats.map(cat=>console.log(cat.name)))
  
  
  
 console.log(props.cats)
 if(props.cats){
   return (<div>
     <p>{}</p>
   </div>)
 }
 else{
   return(
     <div>

     </div>
   )
 }
  return (
  <div>
    <p>{}</p>

  </div>
  );
}

