import React from 'react';
import logo from '../../img/my-removebg-preview.png';
import './User.css';
const User = ({time,handleBreak,timeBreak}) => {

    return (
        <div className='info'>
            <div className='user'>
            <img src={logo} alt="" />
            <div>
            <h4>MD Soliman Alam</h4>
            <small>Akhalia,Sylhet</small>
            </div>
            </div>
            <div>
                <h3>Add a break</h3>
                <div className='break'>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>2</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>5</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>10</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>15</p>
                </div>
            </div>
            <div>
                <h3>Time calculate:</h3>
                <div className='time'>
                <h4>Exercise time: </h4>{time.reduce((oldtime,newtime) => oldtime+newtime,0) } <span>s</span>
                </div>
                <div className='time'>
                <h4>Break time: </h4> {timeBreak} <span>s</span>
                </div>
            </div>
            <button>Exercise done!</button>
        </div>
    );
};

export default User;