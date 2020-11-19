import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    shrinked: false,
    building: false
};

const shrinkLeftSidebar = (state, action) => {
    return updateObject(state, {shrinked: true});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHRINK_LEFT_SIDEBAR: return shrinkLeftSidebar(state, action);
        default: return state;
    }
};

export default reducer;