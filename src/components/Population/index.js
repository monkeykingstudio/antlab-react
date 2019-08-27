import React from 'react';
import './index.scss';
import Counter from './counter';


const Population = (props) => {

    return (     
        <div id={props.id}>
           <span className="title">population</span>
           <span>248 individus</span>
           <Counter entries={[
               'major',
               'media',
               'minor',
               'breed'
           ]}/> 
        </div>
    );
};

export default Population;
