/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        addToOrder: PropTypes.func,
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    };

    addToCart = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.addToCart}>
                    {isAvailable ? 'Add to cart' : 'Sold out!'}
                </button>
            </li>
        );
    }
}

export default Fish;
