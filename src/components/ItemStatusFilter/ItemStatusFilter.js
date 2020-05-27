import React from "react";

const ItemStatusFilter = (props) => {

    const arrayButtons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    const {filter, onFilterChange} = props;
    const buttons = arrayButtons.map(({name, label}) => {
        const clazz = filter === name ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button key = {name} className={`btn ${clazz}`}
                    onClick={() => onFilterChange(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
};

export default ItemStatusFilter;