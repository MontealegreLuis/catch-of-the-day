/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
    renderOrderItem = (fishId) => {
        const fish = this.props.fishes[fishId];
        if (!fish) return null;

        const amount = this.props.order[fishId];
        const isAvailable = fish.status === 'available';

        if (!isAvailable) return <li key={fishId}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>;

        return (
            <li key={fishId}>
                {amount} lbs {fish.name}
                {formatPrice(amount * fish.price)}
            </li>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((sum, fishId) => {
            const fish = this.props.fishes[fishId];
            const amount = this.props.order[fishId];
            const isAvailable = fish && fish.status === 'available';
            return isAvailable ? sum + fish.price * amount : sum;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrderItem)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;
