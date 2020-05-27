import React, {Component} from "react";
import './SearchPanel.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

class SearchPanel extends Component{
    constructor() {
        super();
        this.state = {
            term: '',
            val: ''
        }
    }

    // ClickButton = () => {
    //     this.setState({val:this.someHTMLTag.attributes.price.value});
    // };

    render() {
        const {filterList, filter, onFilterChange} = this.props;
        return (
            <div className='search-wrap'>
                <input className='search-input' type='text' placeholder='Search task' onChange={filterList}/>
                <ItemStatusFilter filter={filter}
                                  onFilterChange={onFilterChange}/>
                {/*<div>*/}
                {/*    <input type="text" placeholder="test" price='500' defaultValue={this.state.val}*/}
                {/*           ref={(input) => this.someHTMLTag = input} />*/}
                {/*    <button onClick={this.ClickButton}>Submit</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default SearchPanel;