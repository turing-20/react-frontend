import axios from "axios";
import React, { useState } from "react";
import Formdata from 'form-data';

const BASE_URL="http://127.0.0.1:8000"
const API_KEY="test"

const TodoForm = ({setList}) =>{
    const [userInput, setuserInput]=useState('');

    const handleChange = (e) => {
        setuserInput(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var data = new Formdata();
        data.append('description', userInput);
        axios({
            method:"post",
            url:BASE_URL,
            params:{"key":API_KEY},
            data : data,
        }).then(res =>
            {
                console.log(res.data);
                setList(list => [...list,res.data])
            }).catch(err => {
                console.log(err);
            });
        setuserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Task ..." />
            <button>Submit</button>
        </form>
    )
}

export default TodoForm;