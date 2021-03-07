
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'


function Edit(props){
    const id =props.match.params.id;
        
        const [task, setTask] = useState([]);
        const [value, setValue]= useState('');
        const[test, setTest]=useState(props.completed);

      
            const handleFormChangeInput=e=>{
                const newData=e.target.value;
                 setValue(newData)
                
            }

            const handleSubmit=event=>{
                
            event.preventDefault()
                axios.put(`http://localhost/ToDoList/public/api/todoList/${id}?name=${value}&completed=${test}`).catch(err => { console.log(err) })
               
               props.history.push('/home')
             }

             useEffect(() => {
                  axios.get(`http://localhost/ToDoList/public/api/task/${id}`)
                .then(res => {
                    setTask(res.data)           
                })
                    .catch(err => { console.log(err) })
                },[]
                
                )
               function handleChange  (event){                 
               
                    setTest(event.target.value) 
                }

                
                return (
                    
                    <div className="App">
                    <p className="title">Change Task</p>
                    {task.map(item=>
                        <form onSubmit={handleSubmit}> 
                           <input name="task" className="form-control" type="text"
                            onChange={(e)=>handleFormChangeInput(e)} placeholder={item.name}
                            value={value}/>
                              
                                <div onChange={()=>handleChange(event)}> 
                                    <input type="radio" value= "true" name="status"/>  Completed 
                                    <input type="radio" value="false" name="status"/> Not Completed  
                                </div>
                        <button type="submit" >Save</button>    
                        </form>
                        )}
                
                   </div> 
            
                );        
                }

            

           

export default Edit; 