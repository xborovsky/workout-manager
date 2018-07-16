import React from 'react';
import Loader from './Loader';

const BlockLoader = () =>
    <div className="row">
        <Loader additionalClasses={['block']} />
    </div>
;

export default BlockLoader;