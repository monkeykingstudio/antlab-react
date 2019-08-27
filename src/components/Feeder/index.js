import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import Uuid from 'uuid/v4';

import './index.scss';
import Select from '../Select'
import Radios from '../Radios';
import History from '../History';

const Feeder = (props) => {

    const [entry, setEntry] = useState({
        "food": "sweet liquid",
        "dayTime": null
    });

    const sendUserData = async () => {
        axios.post('http://localhost:4000/feeder', { 
                'id': Uuid(),    
               'food': entry.food,
               'time': entry.dayTime,
               'date': moment().format('L')
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });     
    }

    const handleSubmit = (e) => {
        if(entry.food && entry.dayTime != null)
        {sendUserData()}
        else {alert('You must fill all fields');
        e.preventDefault()}
    }

    return (
        <div id={props.id} >
            <form onSubmit={handleSubmit}>
                <span className="title">{props.title}</span>
                <Select 
                options={
                    [
                        'sweet liquid',
                        'seeds',
                        'insect'
                    ]
                } 
                id="Select"
                setFeederFood={(e) => {
                    setEntry(
                        prevState => {
                            return { ...prevState, food: e }
                        }
                    );
                }} 
                />
                <Radios 
                id='Radios' 
                amount={3} 
                setFeederDayTime={(e) => {
                    setEntry(
                        prevState => {
                            return { ...prevState, dayTime: e }
                        }
                    );
                }}
                />
                <History id='History' maxEntries={5}/>
                <button type='submit'>Feed!</button>
            </form>
        </div>
    );
};

export default Feeder;
