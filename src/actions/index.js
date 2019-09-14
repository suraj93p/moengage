import actionCreator from '../utils/action-creator';
import {
    GET_DATA,
    SET_SEARCH_TEXT,
    SET_PAGE_NUM,
} from '../action-types';

export const getData = actionCreator(GET_DATA, 'payload');
export const setSearchText = actionCreator(SET_SEARCH_TEXT, 'payload');
export const setPageNum = actionCreator(SET_PAGE_NUM, 'payload');
