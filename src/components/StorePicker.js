/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a Store</h2>
                <input required placeholder="Store name"/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker
