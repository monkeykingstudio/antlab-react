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

    const totalAnts = (major.births + media.births + minor.births) - (major.death + media.death + minor.death)
    const totalMajor = (major.births - major.death)
    const totalMedia = (media.births - media.death)
    const totalMinor = (minor.births - minor.death)
    
  

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
            <div className="population">
                <span className="title">population</span>
                <div className="counts">
                   <div className="values">
                    <span>majors: {totalMajor} </span>
                    <span>media: {totalMedia}</span>
                    <span>minor: {totalMinor}</span>
                   </div>
                    <span className='count'>{`${totalAnts} ants`}</span>

                </div>
            </div>
           <span>last update : 21/10/19, 22:05</span>
           <Counter 
            setPopulationDeath={
             (e, f) => {
                switch (f) {
                case 0: 
                    setMajor(prevState => {return { ...prevState, "death": e}});
                    sendData(0, major)
                    break;
                case 1:
                    setMedia(prevState => {return { ...prevState, "death": e}});  
                    sendData(1, media)
                    break;
                case 2:
                    setMinor(prevState => {return { ...prevState, "death": e}});   
                    sendData(2, minor)
                    break;
                case 3:
                    setBreed(prevState => {return { ...prevState, "death": e}});
                    sendData(3, breed)
                    break;
                default:
                    break;
                }
            }}
            setPopulationBirths={(e, f) => {
                switch (f) {
                case 0: 
                    setMajor(prevState => {return { ...prevState, "births": e}});
                    sendData(0, major)
                    break;
                case 1:
                    setMedia(prevState => {return { ...prevState, "births": e}});  
                    sendData(1, media)
                    break;
                case 2:
                    setMinor(prevState => {return { ...prevState, "births": e}});    
                    sendData(2, minor)
                    break;
                case 3:
                    setBreed(prevState => {return { ...prevState, "births": e}});  
                    sendData(3, breed)
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
           resetState={(id) => {
            switch (id) {
                case 0: 
                    sendData(0, oldState[0])
                    setMajor(prevState => {return { ...prevState, "births": oldState[0].births}}); 
                    setMajor(prevState => {return { ...prevState, "death": oldState[0].death}});  
                    break;
                case 1:
                    sendData(1, oldState[1])
                    setMedia(prevState => {return { ...prevState, "births": oldState[1].births}}); 
                    setMedia(prevState => {return { ...prevState, "death": oldState[1].death}});  
                    break;
                case 2:
                    sendData(2, oldState[2])
                    setMinor(prevState => {return { ...prevState, "births": oldState[2].births}}); 
                    setMinor(prevState => {return { ...prevState, "death": oldState[2].death}});  
                    break;
                case 3:
                    sendData(3, oldState[3])
                    setBreed(prevState => {return { ...prevState, "births": oldState[3].births}}); 
                    setBreed(prevState => {return { ...prevState, "death": oldState[3].death}});  
                    break;
                default:
                    break;
                }
           }}
           major={major}
           media={media}
           minor={minor}
           breed={breed}
           /> 
           <button 
           onClick={()=> {
               sendData(0, major)
               sendData(1, media)
               sendData(2, minor)
               sendData(3, breed)
            }}           
           onMouseUp={() => {
               setMajor(oldState[0])
               setMedia(oldState[1])
               setMinor(oldState[2])
               setBreed(oldState[3])

           }} className="clear red">reset all</button>
        </div>
    );
};

export default Population;
