/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    };
    name = React.createRef();
    price = React.createRef();
    status = React.createRef();
    desc = React.createRef();
    image = React.createRef();

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.name.current.value,
            price: parseFloat(this.price.current.value),
            status: this.status.current.value,
            desc: this.desc.current.value,
            image: this.image.current.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.name} placeholder="Name"/>
                <input name="price" ref={this.price} placeholder="Price"/>
                <select name="status" ref={this.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.desc} placeholder="Description"/>
                <input name="image" ref={this.image} placeholder="Image"/>
                <button type="submit">Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;
