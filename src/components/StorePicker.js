/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    storeName = React.createRef();

    gotToStore = event => {
        event.preventDefault();
        const storeName = this.storeName.current.value;
        this.props.history.push(`/stores/${storeName}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.gotToStore}>
                <h2>Please enter a Store</h2>
                <input required placeholder="Store name" defaultValue={getFunName()} ref={this.storeName}/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker
