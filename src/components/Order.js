/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component {
    renderOrderItem = (fishId) => {
        const fish = this.props.fishes[fishId];
        if (!fish) return null;

        const transitionOptions = {
            classNames: "order",
            key: fishId,
            timeout: {enter: 500, exit: 500}
        };

        const amount = this.props.order[fishId];
        const isAvailable = fish.status === 'available';

        if (!isAvailable) return (
            <CSSTransition {...transitionOptions}>
                <li key={fishId}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
            </CSSTransition>
        );

        return (
            <CSSTransition {...transitionOptions}>
                <li key={fishId}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={amount} timeout={{enter: 500, exit: 500}}>
                                <span>{amount}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name}
                        {formatPrice(amount * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(fishId)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrderItem)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;
