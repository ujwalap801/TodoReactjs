import { useState } from "react";

export default function TodoList()
{

    let [todos,setTodos]=useState(["sample task"]);
    let [newTodo,setnewTodo]=useState("");
    let addNewTask=()=>
    {
             setTodos=()=>
             {
                setTodos([...todos,newTodo]);
             }
    };

    let updateTaskValue=(event)=>
    {
            setnewTodo(event.target.value);
    };
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTaskValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add a Task</button>
           <br>
           </br>
           <br>
           </br>
           <br></br>
           <hr></hr>

        <h4>TodoList</h4>
        <ul>
              {
                todos.map((todo)=>
                (
                    <li> {todo}</li>
                
                ))
              }
        </ul>
        </div>
    );
}