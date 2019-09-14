import { combineReducers } from 'redux'
import { data } from './data'
import { searchText } from './search-text'
import { pageNum } from './page-num'

export default combineReducers({
    data,
    searchText,
    pageNum
})
