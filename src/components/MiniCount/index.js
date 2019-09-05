import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios'

const MiniCount = (props) => {
  const [fetchedData, setFetchedData] = useState({ data:[]});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/api/population',
      );
      setFetchedData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
    {fetchedData.data.map(item => (
        <li key={item._id}>
         <p>population: {item.type}</p>
         <span>morts: {item.death}, naissances: {item.birth}</span>
        </li>
      ))}
    
    </ul>
  );
}
export default MiniCount;
