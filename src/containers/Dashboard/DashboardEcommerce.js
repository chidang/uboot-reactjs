import React, { Component } from 'react';

class DashboardEcommerce extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  render() {
    return (
      <div>
        <i className="fab fa-500px"></i>
        <i className="uil-angle-right"></i>
        <i className="dripicons-alarm"></i>
        <i className="bi-alarm-fill"></i>
        Ecommerce
      </div>
    )
  }
}

export default DashboardEcommerce;
