import React from 'react';
import './Activity.css';
const Activity = ({activity}) => {
    return (
        <div className='activity-container'>
            <img src={activity.picture} alt="" />
            <h3>{activity.name}</h3>
            <p><b>Details:</b> {activity.details}</p>
            <p><b>Time:</b> {activity.time}min</p>
            <button>Add</button>
        </div>
    );
};

export default Activity;