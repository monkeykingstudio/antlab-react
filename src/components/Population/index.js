import React, {useState} from 'react';
import './index.scss';
import Counter from './counter';

import axios from 'axios'


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             'http://localhost:4000/population/1'
    //         );  
    //             setValue(result.data);
    //     }; 
    //     fetchData();
    // },[]);

const Population = (props) => {

    const [major, setMajor] = useState({
        "death": 0,
        "births": 0
    })

    const [media, setMedia] = useState({
        "death": 0,
        "births": 0
    })

    const [minor, setMinor] = useState({
        "death": 0,
        "births": 0
    })

    const [breed, setBreed] = useState({
        "death": 0,
        "births": 0
    })

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
            {/* <div className="buttons">
                <button>reset all</button>
                <button>save</button>
            </div> */}
        </div>
    );
};

export default Population;
