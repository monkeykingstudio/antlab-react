import React, { useState, useEffect } from 'react';
import './index.scss';
// import useEvent from './useEvent';
import axios from 'axios'

const MiniCount = (props) => {
  const [data, setData] = useState({ data:[]});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/api/population',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
    {data.data.map(item => (
        <li key={item._id}>
         <p>population: {item.type}</p>
         <span>morts: {item.death}, naissances: {item.birth}</span>
        </li>
      ))}
    
    </ul>
  );
}
export default MiniCount;
