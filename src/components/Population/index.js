import React, {useState, useEffect} from 'react';
import './index.scss';
import Counter from './counter';

import axios from 'axios'

const Population = (props) => {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/population'
            );  
            setData(result.data);

            setMajor(result.data[0]);
            
            setMedia(result.data[1]);
            setMinor(result.data[2]);
            setBreed(result.data[3]);
        }; 
        fetchData();
    },[]);

    const [major, setMajor] = useState({
        id: 0,
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
    console.log('data: ', data)
    console.log('major: ', major)

    return (     
        <div id={props.id}>
           <span className="title">population</span>
           <span>248 individus</span>
           <Counter 
            setPopulationDeath={
             (e, f) => {
                     switch (f) {
                         case 0:
                            
                            break;
                        case 1:
                             
                            break;
                        case 2:
                             
                            break;
                        case 3:
                             
                            break;
                         default:
                             break;
                     }
                }
           }
            setPopulationBirths={(e, f) => {
                switch (f) {
                case 0:
                    setMajor(
                        prevState => {
                            console.log(major)
                            return { ...prevState, "births": e}
                        }
                    );
                    break;
                case 1:
                        
                    break;
                case 2:
                        
                    break;
                case 3:
                        
                    break;

                default:
                    break;
                }
            }
           }
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
        </div>
    );
};

export default Population;
