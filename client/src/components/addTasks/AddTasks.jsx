import React, { useEffect, useState } from 'react'
import './addTasks.css';
import { addSign } from '../../assets/assets';

const AddTasks = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");

    function handleTaskTitle(event) {
        setTaskTitle(event.target.value);
    }
    function handleTaskDesc(event) {
        setTaskDesc(event.target.value);
    }

    const data = {
        taskTitle, taskDesc
    };

    useEffect(() => {
        console.log(data); 
    }, [taskTitle, taskDesc]);

    

  return (
    <div className='addTasks-wrapper'>
        <div className="addTasks-header">
            <h1>Create a new task</h1>
        </div>
        <div className="addTask-form">
            <form >
                <div className="addTask-form-title">
                    <input type="text" placeholder='Title' value={taskTitle} onChange={handleTaskTitle}/>
                </div>
                <div className="addTask-form-information">
                    <input type="text" placeholder='Description' value={taskDesc} onChange={handleTaskDesc}/>
                    <button type='submit'><img src={addSign} alt="" /></button>
                </div>            
            </form>
        </div>
    </div>
  )
}

export default AddTasks