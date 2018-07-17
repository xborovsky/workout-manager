import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumbs = ({items}) =>
    <nav>
        <ol className="breadcrumb">
            {
                items.map((item, cnt) =>
                    <li key={cnt} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                        {item.link ? <a href={item.link}>{item.label}</a> : item.label}
                    </li>
                )
            }
        </ol>
    </nav>
;

BreadCrumbs.propTypes = {
    items : PropTypes.arrayOf(
            PropTypes.shape({
                label : PropTypes.string.isRequired,
                link : PropTypes.string,
                active : PropTypes.bool
            })
        ).isRequired
};

export default BreadCrumbs;