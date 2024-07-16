import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks').then(response => {
            setTasks(response.data);
        });
    }, []);

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>{task.title}</div>
            ))}
        </div>
    );
};

export default TaskList;