import React, {useState, useEffect} from 'react';
import './index.scss';
import Counter from './counter';

import axios from 'axios'

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

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/population'
            );  
            setData(result.data);
            setMajor(data.major);
            setMedia(data.media);
            setMinor(data.minor);
            setBreed(data.breed);
        }; 
        fetchData();
    },[]);

    return (     
        <div id={props.id}>
           <span className="title">population</span>
           <span>248 individus</span>
           <Counter 
        //    setPopulationDeath={
        //     (e) => {
        //             setEntry(
        //                 prevState => {
        //                     return { ...prevState, food: e }
        //                 }
        //             );
        //         }
        //    }
        //    setPopulationBirth={}
           entries={[
               'major',
               'media',
               'minor',
               'breed'
           ]}/> 
        </div>
    );
};

export default Population;
