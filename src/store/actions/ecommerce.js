import * as actionTypes from './actionTypes';

export const setEcommerceCheckoutStep = (step) => {
    return {
        type: actionTypes.SET_ECOMMERCE_CHECKOUT_STEP,
        step: step
    }
}