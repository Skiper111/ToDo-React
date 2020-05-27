import React from "react";
import style from './header.module.css';
import '../../App.css';

const AppHeader = (props) => {
    return (
        <div className={style.head}>
            <h1 className={style.headTitle}>My ToDo list</h1>
            <div>
                <div>More to do: <span>{props.active}</span></div>
                <div>Done: <span>{props.done}</span></div>
            </div>
        </div>
    )
};

export default AppHeader;