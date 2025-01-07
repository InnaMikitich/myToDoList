import React from "react";
import stylesItems from './TodoItems.module.css'

function TodoItems({tasks, deleteTask, checked, changeChecbox, editTask}) {
    return (
    <div className={stylesItems.conteiner}>
        {tasks.map((task,index) => (
            <div key={index} className={stylesItems.taskContainer}>
               
             	<input 
                className={stylesItems.check}
                type="checkbox" 
                checked={checked.includes(index)} 
                onChange={() => changeChecbox(index)} />   
                <span 
                class={`${stylesItems.items} ${checked.includes(index) ? stylesItems.redText : ''}`}
                style={{ textDecoration: checked.includes(index) ? 'line-through' : 'none'}}
                onClick={() => editTask(index)}
                >
                {index + 1}. {task}</span> 
                <button 
                class={stylesItems.button}
                onClick={() => deleteTask(index)
                 }></button>
           
                </div>
        ))} 
    </div>
    );
}

export default TodoItems;