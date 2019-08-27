import React from 'react';
import './index.scss';

const Output = (props) => {

    let major = props.data.major
    let media = props.data.media;
    let minor = props.data.minor;
    let breed= props.data.breed;

    let deaths = 0;
    let births = 0;

    // console.log('major: ', major);

    switch (props.name) {
        case 'major':
            deaths = major[0].deaths;
            births = major[0].births;
            break;

        case 'media':
            deaths = media[0].deaths;
            births = media[0].births;
            break;

        case 'minor':
            deaths = minor[0].deaths;
            births = minor[0].births;
            break;

        case 'breed':
            deaths = breed[0].deaths;
            births = breed[0].births;
            break;
    
        default:
            break;
    }
   
  
    return (          
        <div className='output-container'>
            <span className="title">{props.id !== 0 ? 'births' : 'death'}</span>
            <div className="output">
                <span>
                    {
                       props.id !== 0 
                       ? births 
                       : deaths
                    }
                </span>
            </div>
        </div>
    );
};

export default Output;
