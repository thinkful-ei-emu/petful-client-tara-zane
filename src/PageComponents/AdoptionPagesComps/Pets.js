import React from "react";

export default function Pets(props) {


  let cats= props.cats[0].name

  
  
  
 console.log(cats)
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

