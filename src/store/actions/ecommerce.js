import * as actionTypes from './actionTypes';

export const setEcommerceCheckoutStep = (step) => {
    return {
        type: actionTypes.SET_ECOMMERCE_CHECKOUT_STEP,
        step: step
    }
}

export const setBillingAddress = (billingAddress) => {
    return {
        type: actionTypes.SET_BILLING_ADDRESS,
        billingAddress: billingAddress
    }
}

export const setPaymentMethod = (paymentMethod) => {
    return {
        type: actionTypes.SET_PAYMENT_METHOD,
        paymentMethod: paymentMethod
    }
}
