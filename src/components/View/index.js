import React from 'react';
import './index.scss';

import Header from '../Header/index';

const View = (props) => {

    return (
        <div id={props.id}>
            <Header id="Header" />
        </div>
    );
};

export default View;
