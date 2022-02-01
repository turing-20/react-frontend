import React from "react";

const Todo = ({todo,handleToggle}) => {

    const handleClick= (e) => {
        e.preventDefault();
        handleToggle(todo);
    }
    return (
        <div className="Todo" className={todo.completed ? 'strike': ''} id ={todo.id} key = {todo.id + todo.description} value={todo.id} onClick = {handleClick}  >
            {todo.description}
        </div> 
    );
}
export default Todo;