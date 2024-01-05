import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo()
{
let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
let [newTodo,setnewTodo]=useState([""]);
let addNewTask=()=>
{


             setTodos((prevTodos)=>
             {
             return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
             });
             setnewTodo("")
}

    let  updateTaskValue=(event)=>
    {
            setnewTodo(event.target.value);
    }


    let deleteTodo=(id)=>
    {
       setTodos((prevTodos)=>
       todos.filter((prevTodos)=>
    
        prevTodos.id!=id
      ));
    }

    let markAllDone=()=>{
        setTodos((todos)=> 
           todos.map((todo)=>
           {
            return {
                ...todo,
                isDone:true,
                  };
           })
        );
      
    };


    let markAsDone=(id)=>
    {
        setTodos((prevTodos)=>


            prevTodos.map((todo)=>
            {
            if(todo.id==id)
            {
                return{
                    ...todo,
                    isDone:true,
                };
            }
            else{
                return todo;
            }
        })
        );
    };
    return(
        <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTaskValue}></input> 
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Todo List</h4>
      <ul>
            {todos.map((todo)=>
            (
                <li key={todo.id}>
                    <span style={todo.isDone ?{textDecorationLine:"line-through" ,backgroundColor:"red"} : { }}>  {todo.task} </span>
                    &nbsp;  &nbsp;  &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>Markas Done</button>
                    </li>
            ))
            }
      </ul>


      <button onClick={markAllDone}>MarkAllDone</button>
      </div>

    );
}



