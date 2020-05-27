import React, {Component} from 'react';
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ToDoList from "./components/ToDoList/ToDoList";
import AddTask from "./components/AddTask/AddTask";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {
                    id: 1,
                    label: 'Drink coffee',
                    important: false,
                    done: false
                },
                {
                    id: 2,
                    label: 'Learn React',
                    important: true,
                    done: true

                },
                {
                    id: 3,
                    label: 'Chill',
                    important: true,
                    done: false
                },
                {
                    id: 4,
                    label: 'Sleep',
                    important: false,
                    done: true
                }
            ],
            term: '',
            filter: 'all'
        }
    }

    onDelete = (id) => {

        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id === id);

            const newtodoData = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];

            return  {
                todoData: newtodoData
            }
        });
    };

    onMarkImportant = (id) => {
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id === id);
            const newItem = {...todoData[indx], important: !todoData[indx].important};
            const newtodoData = [...todoData.slice(0, indx), newItem,...todoData.slice(indx + 1)];

            return {
                todoData: newtodoData
            }
        })
    };

    onLabelClick = (id) => {
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id === id);
            const newItem = {...todoData[indx], done: !todoData[indx].done};
            const newtodoData = [...todoData.slice(0, indx), newItem,...todoData.slice(indx + 1)];

            return {
                todoData: newtodoData
            }
        })
    };

    search = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    };

    filterList = (e) => {
        const termValue = e.target.value.toLowerCase();
        this.setState({term: termValue})
    };

    filterTab = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;

        }
    };

    onFilterChange = (name) => {
        this.setState({filter: name})
    };

    addTask = (e) => {
        const newLabel = e.target.previousSibling.value;

        this.setState(({todoData}) => {
            var id = 1;

            todoData.forEach(e => {
               if (id <= e.id){
                   id = e.id + 1;
               }
            });

            const newTask = {
                id: id,
                label: newLabel,
                important: false,
                done: false
            };

            const newtodoData = [...todoData, newTask];

            return {
                todoData: newtodoData
                }
            }
        );
        e.target.previousSibling.value = '';
    };

    render() {
        const {todoData, term, filter} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filterTab(
                                            this.search(todoData, term),
                                            filter);
        return (
            <div className='taskWrap'>
                <AppHeader active = {doneCount} done = {todoCount}/>
                <SearchPanel filterList = {this.filterList}
                             filter = {filter}
                             onFilterChange = {this.onFilterChange}
                             />
                <ToDoList todoData = {visibleItems}
                          onDelete = {this.onDelete}
                          onLabelClick = {this.onLabelClick}
                          onMarkImportant = {this.onMarkImportant}
                />
                <AddTask addTask = {this.addTask}/>
            </div>
        );
    }
}

export default App;
