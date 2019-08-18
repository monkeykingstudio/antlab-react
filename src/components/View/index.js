import React from 'react';
import './index.scss';

import Header from '../Header/index';
import Content from '../Content/index';

const View = (props) => {

    return (
        <div id={props.id}>
            <Header id='Header' />
            <Content id='Content' />
        </div>
    );
};

export default View;
