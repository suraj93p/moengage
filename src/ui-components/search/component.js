import React, { Component } from 'react'
import { debounce } from '../../utils/debounce'
import './style.css'

class SearchBox extends Component {

    handleOnChange = (e) => {
        let { value } = e.target;
        debounce(this.props.setSearchText(value), 5000);
    }

    searchForData = (e) => {
        e.preventDefault();
        this.props.getData();
    }

    render() {
        const { searchText } = this.props;
        return (
            <div className='container'>
                <div className='header'>Search Result</div>
                <form className='search-box'>
                    <input className='input-text' type='text' name='searchText' value={searchText} onChange={this.handleOnChange} />
                    <button
                        disabled={searchText === ''}
                        className={'btn-medium ' + (searchText === '' ? 'disable-btn' : '')}
                        type='submit'
                        onClick={this.searchForData}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBox
