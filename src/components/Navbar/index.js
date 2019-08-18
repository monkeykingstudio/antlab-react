import React from 'react';
import './index.scss';

const Navbar = (props) => {

    return (
        <div id={props.id}>
        <div className="logo-container">
            <div className='logo'></div>
            <div className='sub-title'>
                <span>ant</span>
                <span>Lab</span>
            </div>
        </div>

            <div className='square'></div>

        </div>
    );
};

export default Navbar;
