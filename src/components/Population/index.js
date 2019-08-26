import React from 'react';
import './index.scss';
import Counter from './counter';




const Population = (props) => {

    return (     
        <div id={props.id}>
           <span className="title">population</span>
           <Counter id='Counter' entries={[
               'minor',
               'media',
               'major',
               'breed'
           ]}/> 
        </div>
    );
};

export default Population;
