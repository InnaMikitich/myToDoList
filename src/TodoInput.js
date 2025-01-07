import React from "react";
import inputBox from './TodoInput.module.css'

function TodoInput({text, handleChange, addTask}) {
    return (<div className={inputBox.inputContainer}>
    <input 
    id={inputBox.inputBx}
    value={text}
    onChange={handleChange}
    placeholder="Write here..."
    onKeyUp={(event) => {
        if (event.key === 'Enter') { 
            addTask();
        }
    }}
    />
    <button 
    id={inputBox.buttonAdd}
    onClick={addTask}></button>
    </div>

    )
}

export default TodoInput;