import React from "react";
import './AddTask.css';



const AddTask = (props) => {
        return (
            <div className='addTaskWrap'>
                <input className='addText search-input' placeholder='Add Task' type='text'/>
                <button className='AddTask btn btn-info' onClick={props.addTask}>Add</button>
            </div>
        )
};

export default AddTask;