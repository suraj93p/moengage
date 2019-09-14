import { constants } from '../constants';
import { SET_PAGE_NUM } from '../action-types';

export const pageNum = (state = constants.defaultState.pageNum, action = {}) => {
    switch (action.type) {
        case SET_PAGE_NUM:
            return action.payload;
        default:
            return state;
    }
};
