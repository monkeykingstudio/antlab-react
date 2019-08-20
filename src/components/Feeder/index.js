import React, {useState} from 'react';
import './index.scss';
import Select from '../Select'
import Radios from '../Radios';
import History from './history';

const Feeder = (props) => {
    const [food, setFood] = useState('');
    const [dayTime, setDayTime] = useState(null);

    const handleSubmit = () => {
       
    }

    console.log('food state: ', food);
    console.log('daytime state: ', dayTime);

    return (
        <div id={props.id} >
            <form onSubmit={handleSubmit}>
                <span className="title">{props.title}</span>
                <Select 
                options={
                    [
                        'sweet liquid',
                        'seeds',
                        'bug'
                    ]
                } 
                id="Select"
                setFeederFood={(e) => {
                    setFood(e);
                }} 
                />
                <Radios 
                id='Radios' 
                amount={3} 
                setFeederDayTime={(e) => {
                    setDayTime(e);
                }}
                />
                <History />
                <button type='submit'>Feed!</button>
            </form>
        </div>
    );
};

export default Feeder;
