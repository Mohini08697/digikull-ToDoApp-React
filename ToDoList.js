import React from "react"
import "./ToDoApp.css"

export default function ToDoList(props){
  
   
    return(
        <>
        <div>
 <li className="div5" key={props.id}>{props.text}</li>
 <button onClick={()=>{props.Delete(props.id)}}>delete</button>
</div>
</>   
 )
}