/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';

class EditFishForm extends React.Component {
    updateFish = (event) => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (
            <form className="fish-edit">
                <input name="name" value={this.props.fish.name} onChange={this.updateFish} placeholder="Name"/>
                <input name="price" value={this.props.fish.price} onChange={this.updateFish} placeholder="Price"/>
                <select name="status" value={this.props.fish.status} onChange={this.updateFish}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea
                    name="desc"
                    value={this.props.fish.desc}
                    onChange={this.updateFish}
                    placeholder="Description"
                />
                <input name="image" value={this.props.fish.image} onChange={this.updateFish} placeholder="Image"/>
                <button type="submit">Update Fish</button>
            </form>
        );
    }
}

export default EditFishForm;
