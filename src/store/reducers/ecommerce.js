import merge from "deepmerge";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    checkout: { 
        step: 1,
        paymentMethod: 'Credit card',
        billingAddress: ''
    }
};

const setStep = (state, action) => {
    return merge(state, {
        checkout: { step: action.step }
    });
}

const setBillingAdress = (state, action) => {
    return merge(state, {
        checkout: { billingAddress: action.billingAddress }
    });
}

const setPaymentMethod = (state, action) => {
    return merge(state, {
        checkout: { paymentMethod: action.paymentMethod }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ECOMMERCE_CHECKOUT_STEP: return setStep(state, action);
        case actionTypes.SET_PAYMENT_METHOD: return setPaymentMethod(state, action);
        case actionTypes.SET_BILLING_ADDRESS: return setBillingAdress(state, action);
        default: return state;
    }
};

export default reducer;
