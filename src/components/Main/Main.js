import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import User from '../User/User';
import './Main.css';

const Main = () => {
    const [data ,setData] =useState([]);
    const [activeTime,setActiveTime] =useState([]);
    const[breakTime, setBreakTime] = useState(0)
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const handleBtn = time => {
        const newtime = [...activeTime,time];
        setActiveTime(newtime);
    }
    const handleBreak = (timeBreak) => {
        setBreakTime(timeBreak);
        localStorage.setItem("timeBreak",timeBreak);
    }
    return (
        <div className='main-container'>
            <div className='card-container'>
            {
                data.map(activity => <Activity  handleBtn={handleBtn} key={activity._id} activity={activity}></Activity>)
            }
            </div>
            <User timeBreak={breakTime} time ={activeTime} handleBreak={handleBreak}></User>
        </div>
    );
};

export default Main;