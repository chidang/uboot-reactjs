import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    checkout: { step: 1 }
};

const setStep = (state, action) => {
    return updateObject(state, {
        checkout: { step: action.step }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ECOMMERCE_CHECKOUT_STEP: return setStep(state, action);
        default: return state;
    }
};

export default reducer;
