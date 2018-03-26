/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({tagline}) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{tagline}</span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;
