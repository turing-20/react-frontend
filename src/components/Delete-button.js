import React from "react";
import axios from "axios";

const BASE_URL="http://127.0.0.1:8000"
const API_KEY="test"

const DeleteButton = ({todo,setList}) => {
    const handleClick =(e)=>{
        e.preventDefault();
        handleDelete(e.currentTarget.id);
    }
    const handleDelete= () => {
        axios({
            method:"delete",
            url:BASE_URL+'/delete',
            params:{"key":API_KEY, "id":todo.id},
        }).then(res =>
            {
                console.log(res.data);
                setList((prevList)=>{
                    return prevList.filter((item)=> item.id!==todo.id);
                })
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <button onClick={handleClick} >Delete</button>
    )
}

export default DeleteButton;