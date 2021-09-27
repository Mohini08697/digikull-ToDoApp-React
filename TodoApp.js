import React, { useState } from "react"
import ToDoList from "./ToDoList"
import { Button } from "react-bootstrap"
import "./ToDoApp.css"

function TodoApp() {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])

    function itemEvent(e) {
        setInput(e.target.value)
    }

    const AddItem = (id) => {
        console.log("Add Items" + id)
        if (!input) {

        } else {
            setItem((oldObj) => {
                return [...oldObj, input];

            })

        };
        setInput("");
    }

    const DeleteItem = (id) => {
        console.log("Delete" + id)
        setItem((oldObj) => {
            return oldObj.filter((arrEle, i) => {
                return i !== id;
            })
        });
    }



    return (
        <>
            <div className="main-div">
                <div className="center_div">
                    <div className="h1">
                    <h1>TODOAPP</h1><br />
                    </div>
                    <div>
                    <input className="input" type="text" placeholder="Add Items" value={input} onChange={itemEvent} />
                    <button className="button" onClick={AddItem}>+</button>
                    </div>
                    <ol>

                        {
                            item.map((itemval, i) => {
                                return <ToDoList text={itemval} key={i} id={i} Delete={DeleteItem} />
                            })

                        }
                    </ol>

                </div>
            </div>
        </>


    )
}
export default TodoApp;






















//this is second
// return (

    //             <div className="main-div">
    //                 <div className="center_div">
    //               <div className="h1">  <h1 >TODO-APP</h1></div>
    //              <div> <input type="text" placeholder="Add Items" className="input"  />
    //               <button className="button">+</button>
    //              </div>
    //             <div>
    //                 <h3>APPLE</h3>
    //             </div>

    //                 </div>
    //             </div>

    //     )
    // }

    // export default TodoApp;









