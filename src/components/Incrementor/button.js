import React from 'react';
import './index.scss';

const Button = (props) => {
   
    return (     
        <div className='inputs'>
           <p className="title">minor</p>
           <div className="grouped-button">
               <button type="button">-</button>
               <button type="button">+</button>
           </div>
        </div>
    );
};

export default Button;
