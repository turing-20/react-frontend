import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import TodoForm from "./Todo-Form";
import Card from "./Card";

const BASE_URL="http://127.0.0.1:8000"
const List = () => {
    const [list,setList] = React.useState([]);

    useEffect(()=>{
        getLatestTodos();
    },[]);

    const getLatestTodos = () => {
        axios.get(BASE_URL).then(response => {
            setList(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <Header />
            <TodoForm setList={setList}/>
            <Card todoList={list} setList={setList}/>
        </div>
    );
}

export default List;