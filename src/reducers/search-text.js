import { constants } from '../constants';
import { SET_SEARCH_TEXT } from '../action-types';

export const searchText = (state = constants.defaultState.searchText, action = {}) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.payload;
        default:
            return state;
    }
};
