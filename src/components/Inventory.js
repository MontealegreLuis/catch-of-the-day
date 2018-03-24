/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish}/>
            </div>
        )
    }
}

export default Inventory;
