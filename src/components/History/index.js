import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.scss';

import Line from './line';

const History = (props) => {
    const [dbEmpty, setDbEmpty] = useState(true);
    const [data, setData] = useState(); 
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/feeder'
            );  
                let status = (Object.keys(result.data).length <= 0) ? true : false;
                setData(result.data.reverse());
                setDbEmpty(status);
        }; 
        fetchData();
    },[]);

    // const delay = ( function() {
    //     var timer = 0;
    //     return function(callback, ms) {
    //         clearTimeout (timer);
    //         timer = setTimeout(callback, ms);
    //     };
    // })();


    // faire du bouton un component 

    const deleteEntry = id => {
        let newData = [...data];
    
        for(let i=0; i<data.length; i++) {
            if(data[i].id === id) {
                 newData.splice(i,1)
                 break;
            } else {
                continue;
            }
        }
        setData(newData);
        if(data.length <= 1) {
            setDbEmpty(true)
        }
    }

    if(!dbEmpty) {
        return (
            <div id={props.id}>
              {
                data.map((item, i) => (
                 i < props.maxEntries ?
                <Line 
                food={data[i].food} 
                dayTime={data[i].time} 
                day={data[i].date} 
                key={i}
                id={data[i].id}
                deleteEntry={(e) => {
                    deleteEntry(e)
                }}
                 />
                : null
              ))}     
            </div>
         );
    } else {
        return (
            <div id={props.id}>
                <div className="empty">
                    <span>No data to display...</span>
                </div>
            </div>
         );
    }  
};

export default History;