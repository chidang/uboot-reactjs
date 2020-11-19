import * as actionTypes from './actionTypes';

export const shrinkLeftSidebar = (name) => {
    return {
        type: actionTypes.SHRINK_LEFT_SIDEBAR,
        ingredientName: name
    }
}