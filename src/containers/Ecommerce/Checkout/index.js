import React, { useState } from "react";
import InfomationStep from "./InfomationStep";
import ShippingStep from "./ShippingStep";
import PaymentStep from "./PaymentStep";

const Checkout = () => {
  const [step, setStep] = useState(1);

  const changeStep = (newStep) => {
    setStep(newStep);
  }

  const TabContent = () => {
    switch(step) {
      case 2:
        return <ShippingStep />;
      case 3:
        return <PaymentStep />;
      default:
        return <InfomationStep />;
    }
  }
  const tabClasses = "nav-link rounded-0 w-100";
  const infomationTabClasses = step === 1 ? `${tabClasses} active` : tabClasses;
  const shippingTabClasses = step === 2 ? `${tabClasses} active` : tabClasses;
  const paymentTabClasses = step === 3 ? `${tabClasses} active` : tabClasses; 

  return <>
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb pl-0 fs-base">
          <li className="breadcrumb-item"><a href="#">Uboot</a></li>
          <li className="breadcrumb-item"><span>Ecommerce</span></li>
          <li className="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>
      <div className="header justify-content-between mb-4">
        <h1 className="header-title h3">
          <i className="bi-cart3 text-primary" /> Checkout
        </h1>
      </div>
      <ul className="nav nav-pills nav-bg nav-justified mb-4">
        <li className="nav-item">
          <span onClick={() => changeStep(1)} className={infomationTabClasses}>
            <i className="bi-card-heading" />
            <span className="d-none d-lg-block">Infomation</span>
          </span>
        </li>
        <li className="nav-item">
          <span onClick={() => changeStep(2)} className={shippingTabClasses}>
            <i className="bi-truck" />
            <span className="d-none d-lg-block">Shipping</span>
          </span>
        </li>
        <li className="nav-item">
          <span onClick={() => changeStep(3)} className={paymentTabClasses}>
            <i className="bi-cash" />
            <span className="d-none d-lg-block">Payment</span>
          </span>
        </li>
      </ul>
      <div className="tab-content shadow-none px-0">
        <TabContent />
      </div>
    </div>
  </>
}

export default Checkout;
