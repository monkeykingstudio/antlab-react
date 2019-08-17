import React from 'react';
import './index.scss';
import Navbar from '../Navbar/index';
import View from '../View/index';

const Home = (props) => {

    return (
       <div id={props.id}>
            <Navbar id='Navbar' />
            <View id='View'/>
       </div>
    );
};

export default Home;
