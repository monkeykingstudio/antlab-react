import React, {useState, useEffect} from 'react';
import './index.scss';
import Counter from './counter';

import axios from 'axios'

const Population = (props) => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/population'
            );  
            setOldState(result.data)
            setMajor(result.data[0]);   
            setMedia(result.data[1]);
            setMinor(result.data[2]);
            setBreed(result.data[3]);
        }; 
        fetchData();
    },[]);

    const [oldState, setOldState] = useState({
        death: 0,
        births: 0
    })

    const [major, setMajor] = useState({
        death: 0,
        births: 0
    })

    const [media, setMedia] = useState({
        death: 0,
        births: 0
    })

    const [minor, setMinor] = useState({
        death: 0,
        births: 0
    })

    const [breed, setBreed] = useState({
        death: 0,
        births: 0
    })

    const sendData = async (i, e) => {
        axios.put(`http://localhost:4000/population/${i}`, e)
        .then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });     
    }

    return (     
        <div id={props.id}>
           <span className="title">population</span>
           <span>248 individus</span>
           <span>last update : 21/10/19, 22:05</span>
           <Counter 
           save={
               (f) => {
                switch (f) {
                        case 0:
                            sendData(0, major)
                            break;
                        case 1:
                            sendData(1, media)                              
                            break;
                        case 2:
                            sendData(2, minor)                                                           
                            break;
                        case 3:
                            sendData(3, breed)                                                           
                            break;
                        default:
                            break;
                    }
               }
           }
            setPopulationDeath={
             (e, f) => {
                switch (f) {
                case 0: 
                    setMajor(prevState => {return { ...prevState, "death": e}});
                    break;
                case 1:
                    setMedia(prevState => {return { ...prevState, "death": e}});                        
                    break;
                case 2:
                    setMinor(prevState => {return { ...prevState, "death": e}});                                                
                    break;
                case 3:
                    setBreed(prevState => {return { ...prevState, "death": e}});                                                
                    break;
                default:
                    break;
                }
            }}
            setPopulationBirths={(e, f) => {
                switch (f) {
                case 0: 
                    setMajor(prevState => {return { ...prevState, "births": e}});
                    break;
                case 1:
                    setMedia(prevState => {return { ...prevState, "births": e}});                        
                    break;
                case 2:
                    setMinor(prevState => {return { ...prevState, "births": e}});                                                
                    break;
                case 3:
                    setBreed(prevState => {return { ...prevState, "births": e}});                                                
                    break;
                default:
                    break;
                }
            }}
           entries={[
               'major',
               'media',
               'minor',
               'breed'
           ]}
           major={major}
           media={media}
           minor={minor}
           breed={breed}
           /> 
           <button onClick={() => {
               setMajor(oldState[0])
               setMedia(oldState[1])
               setMinor(oldState[2])
               setBreed(oldState[3])
           }} className="red">clear</button>
        </div>
    );
};

export default Population;
