import React from 'react';

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    console.log(orderIds);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fish[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <p>{orderIds}</p>
      </div>
    )
  }
}

export default Order;
