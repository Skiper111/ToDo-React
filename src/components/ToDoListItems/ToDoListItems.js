import React from "react";
import '../../App.css';
import './ToDoListItems.css';

const ToDoListItems = (props) => {
        const { label, id, onDelete, done, important, onLabelClick, onMarkImportant } = props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span className='todo-list-item-label' onClick={onLabelClick}>
                    {label}
                </span>
                <span >
                    <button onClick={onMarkImportant} className="btn btn-outline-success btn-sm">
                        <i className='fa fa-exclamation'/>
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={onDelete}>
                        <i className='fa fa-trash-o'/>
                    </button>
                </span>
            </span>
        )
};

export default ToDoListItems;