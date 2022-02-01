import React from "react";
import axios from "axios";
import Formdata from 'form-data';

const BASE_URL="http://127.0.0.1:8000"
const API_KEY="test"

const Edit = ({todo,setList,list}) =>{
    const [userInput,setuserInput] =React.useState("")

    const handleChange =(e)=>{
        e.preventDefault();
        setuserInput(e.currentTarget.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        var data = new Formdata();
        data.append('description', userInput);
        axios({
            method:"put",
            url:BASE_URL+"/update",
            params:{"key":API_KEY,"id":todo.id},
            data : data,
        }).then(res =>
            {
                console.log(res.data);
                const newList=[...list].map((item)=>{
                    if(item.id === todo.id)
                        item.description=userInput;
                    return item
                });
                setList(newList);
            }).catch(err => {
                console.log(err);
            });
        setuserInput("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Edit task here ...."/>
                <button>Edit</button>
            </form>
        </div>
    )
};

export default Edit;