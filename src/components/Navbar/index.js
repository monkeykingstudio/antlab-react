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
        <div className="baseline">
                <span>breed</span>
                <div className="square"></div>
                <span>study</span>
                <div className="square"></div>
                <span>manage</span>
            </div>
        </div>
    );
};

export default Navbar;
