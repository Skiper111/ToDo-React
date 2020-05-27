import React from "react";
import '../../App.css';
import ToDoListItems from "../ToDoListItems/ToDoListItems";
import './ToDoList.css';

const ToDoList = (props) =>  {
        const {todoData} = props;
        const elements = todoData.map((item) =>{
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <ToDoListItems
                        {...itemProps}
                        onDelete ={() => {props.onDelete(id)}}
                        onLabelClick ={() => {props.onLabelClick(id)}}
                        onMarkImportant ={() => {props.onMarkImportant(id)}}
                    />
                </li>
            )
        });

        return (
            <ol className='list-group todo-list'>
                {elements}
            </ol>
        )
};

export default ToDoList;