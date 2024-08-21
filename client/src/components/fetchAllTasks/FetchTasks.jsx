import React, { useContext, useEffect, useState } from 'react';
import './fetchTasks.css';
import { checkSign, deleteIcom, priorityHigh } from '../../assets/assets.js';
import { Context } from '../../context/context.jsx';

const FetchTasks = () => {

    const { formateDateTime, fetchTasks, tasks } = useContext(Context);

    useEffect(() => {
        fetchTasks();
    }, [])

  return (
    <div className='fetch-tasks-wrapper'>
        <div className="fetch-tasks-header">
            <h1>All Tasks</h1>
        </div>
        {
            tasks.map((task) => (
                <div className="fetch-tasks-tasks" key={task._id}>
                    <div className="task-title">
                        <h2>{task.title}</h2>
                        <h3>{formateDateTime(task.updatedAt)}</h3>
                    </div>
                    <div className="task-desc">
                        <p>{task.desc}</p>
                    </div>
                    <div className="task-buttons">
                        <button><img src={checkSign} alt="" /></button>
                        <button><img src={priorityHigh} alt="" /></button>
                        <button><img src={deleteIcom} alt="" /></button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FetchTasks