import Card from "./Component/Card";
import image from './Component/sameer.jpg'
import React from "react";
import "./Component/card.css"

var newarray =[
      {img: image, name : "sameer"}, 
      {img: image, name : "sameer"},
      {img: image, name : "sameer"},
      {img: image, name : "sameer"}
]

 



function App() {
      //  var myarray = [
      //   {name:"sameer", class:"web&app" },
      //   {name:"hasnain", class:"web&app" },
      //      {name:"kareen", class:"web&app" }
      //  ]
    
    
       return (
      <>
        <div style={{display:"flex"}}>
      {  newarray.map((item)=>{
             return <Card data={item}/>
         
})  }
                    

        </div>
      </>
  );
}

export default App;
