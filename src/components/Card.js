import React from "react";
import DeleteButton from "./Delete-button";
import Todo from "./Todo";
import axios from "axios";
import Edit from "./Edit";


const BASE_URL="http://127.0.0.1:8000"
const API_KEY="test"


const Card = ({todoList , setList}) => {
    const handleToggle = (todo) => {
        axios.put(BASE_URL+"/toggle",null,{params:{"key":API_KEY, "id":todo.id}}).then(res => {
            console.log(res.data);
            const newList=[...todoList].map((item)=>{
                if(item.id === todo.id)
                    item.completed=!item.completed;
                return item
            })
            setList(newList);
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div>
            <ul>
                { todoList.map(todo => {
                    return(
                        <div key={todo.id}>
                            <li> 
                            <Todo todo={todo} handleToggle={handleToggle}/>
                            <DeleteButton todo={todo} setList={setList}/>
                            <Edit todo={todo} setList={setList} list={todoList}/> 
                            </li>
                        </div>
                )
            })}
            </ul>
        </div>
    )
}

export default Card;