import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/context.jsx'
import { checkSign, deleteIcon, priorityHigh } from '../../assets/assets.js';
import './important.css';

const Important = () => {

    const { tasks, fetchTasks, deleteTask, updateTask, } = useContext(Context);

    async function handleImportantToggle(task) {
        const updatedData = { important: !task.important};
        await updateTask(task._id, updatedData);
    };

    async function handleCompleteToggle(task) {
        const updatedData = { completed: !task.completed};
        await updateTask(task._id, updatedData);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const importantTasks = tasks.filter(task => task.important);

  return (
    <div className='important-wrapper'>
        <div className="important-header">
            <h1>Important tasks</h1>
        </div>
        <div className="important-tasks-wrapper">
            {
                importantTasks.map((task) => (
                    <div className='individual-task' key={task._id}>
                        <h2>{task.title}</h2>
                        <p>{task.desc}</p>
                        <div className="individual-task-buttons">
                            <button onClick={() => handleCompleteToggle(task)}><img src={checkSign} alt="" /></button>
                            <button onClick={() => handleImportantToggle(task)}><img src={priorityHigh} alt="" /></button>
                            <button onClick={() => deleteTask(task._id)}><img src={deleteIcon} alt="" /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Important