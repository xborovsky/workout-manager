import React from 'react';
import PropTypes from 'prop-types';

const Loader = (additionalClasses) =>
    <i className={`fas fa-spinner fa-spin ${additionalClasses ? additionalClasses.join(' ') : ''}`}></i>;

Loader.propTypes = {
    additionalClasses : PropTypes.arrayOf(PropTypes.string)
};

export default Loader;