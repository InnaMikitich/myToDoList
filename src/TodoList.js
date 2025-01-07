import React from "react";
import { useState } from "react";
import TodoInput from './TodoInput';
import TodoItems from "./TodoItems";
import classes from './TodoList.module.css';


function TodoList() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [checked, setChecked] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
 
    function handleChange(event) {
        setText(event.target.value);
    }

    function addTask() {
        if(text.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, text]);
            setText('');
           }
    }
    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
       setChecked(prevChecked => prevChecked.filter((_, i) => i !== index));
    }

    function changeChecbox(index) {
		if (checked.includes(index)) {
            setChecked(prevChecked => prevChecked.filter(i => i !== index))
        } else {
            setChecked(prevChecked => [...prevChecked, index]);
        }
	}

    function editTask(index) {
        setEditIndex(index);
        setText(tasks[index]);
    }

    function updateTask() {
        if (text.trim() !== '') {
            setTasks(prevTasks => {
                const updateTasks = [...prevTasks];
                updateTasks[editIndex] = text;
                return updateTasks;
            });
            setText('');
            setEditIndex(null);
        }
    }

    return <div>
        <TodoInput 
            text={text} 
            handleChange={handleChange} 
            addTask={editIndex === null ? addTask : updateTask} />
            < div className={classes.skroll}>
        <TodoItems 
            
            tasks={tasks} 
            deleteTask={deleteTask} 
            checked={checked} 
            changeChecbox={changeChecbox}
            editTask={editTask}/>
            </div>
    </div>
}

export default TodoList; 