import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
    const [data ,setData] =useState([]);
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='main-container'>
            <div className='card-container'>
            {
                data.map(activity => <Activity activity={activity}></Activity>)
            }
            </div>
        </div>
    );
};

export default Main;