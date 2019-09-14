import { constants } from '../constants'
import { rawData } from '../constants/raw-data'
import { GET_DATA } from '../action-types';

export const data = (state = constants.defaultState.data, action = {}) => {
    switch (action.type) {
        case GET_DATA:
            return rawData;
        default:
            return state;
    }
};
