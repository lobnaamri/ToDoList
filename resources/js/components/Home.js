import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaCheckCircle, FaHistory } from "react-icons/fa";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
const [todo, setTodo] = useState([]);
const [task, setTask] = useState('');
const [completed, setCompleted] = useState('false');

const onChange = (e) => {
setTask(e.target.value)
}

const submitTask = (e) => {
              axios.post(`http://localhost/ToDoList/public/api/todoList?user_id=2&name=${task}&completed=${completed}`)
              }


const deletetTask = (event) => {
                axios.delete(`http://localhost/ToDoList/public/api/todoList/${event}`)
              }

              useEffect(() =>  {
              
              axios.get('http://localhost/ToDoList/public/api/todoList')
              .then(res => {
              setTodo(res.data)
              }).catch(err => { console.log(err) })
              })





return (
      <div className="App">
         <p className="title">Liste todo</p>
              <div className="inputcontainer">
                <Form.Control type="text" id="inputbutton" placeholder="What you want to do ...?"  onChange={onChange}/>
                
                <Button  id="btn" className="primary" onClick={submitTask}>Add todo</Button>
                
      </div>

      <ul className="list-group">
          {todo.map(item => (
            <>
            <li className="list-group-item">  <p><span className="titleTask">Todo:</span> {item.name} </p>
            <p> <span className="titleTask">Completed:</span>  { item.completed =="true" ?<span>Yes
              <FaCheckCircle  className="icons"/></span>:<span>Not yet <FaHistory  className="icons" /></span> } 
                <span className="btnContainer">
                <Link to={`/${item.id}/Edit`} >             
                <Button id="btn" variant="warning" >Edit</Button></Link>
                <Button id="btn" variant="danger" onClick={()=>deletetTask(item.id)}>Delete</Button>        
                </span>
            </p>  
            </li>     

            </>
      ))}
      </ul>
      </div>
);
}
export default Home;