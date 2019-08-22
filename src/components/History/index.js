import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.scss';

import Line from './line';

const History = (props) => {
    const [dbEmpty, setDbEmty] = useState(true);
    const [data, setData] = useState(); 
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/feeder'
            );  
                let status = (Object.keys(result.data).length <= 0) ? true : false;
                setData(result.data);
                setDbEmty(status);
        }; 
        fetchData();
    },[]);

    if(!dbEmpty) {
        return (
            <div id={props.id}>
              {data.map((item, i) => (
                <Line 
                food={data[i].food} 
                dayTime={data[i].time} 
                day={data[i].date} 
                key={i} />
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