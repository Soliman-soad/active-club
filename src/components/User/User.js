import React from 'react';
import Swal from 'sweetalert2';
import logo from '../../img/my-removebg-preview.png';
import './User.css';
const User = ({time,handleBreak,timeBreak}) => {

    const handleComplte = () => {
        Swal.fire(
            'Good job!',
            'Exercise done!',
            'success'
          )

        
    }

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
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>2s</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>5s</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>10s</p>
                    <p onClick={(e)=>handleBreak(e.target.innerText)}>15s</p>
                </div>
            </div>
            <div>
                <h3>Time calculate:</h3>
                <div className='time'>
                <h4>Exercise time: </h4>{time.reduce((oldtime,newtime) => oldtime+newtime,0) } <span>s</span>
                </div>
                <div className='time'>
                <h4>Break time: </h4> {localStorage.getItem('timeBreak')} 
                </div>
            </div>
            <button onClick={handleComplte}>Exercise done!</button>
        </div>
    );
};

export default User;