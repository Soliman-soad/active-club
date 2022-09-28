import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
    const element = <FontAwesomeIcon icon={faDumbbell} />

    return (
        <div className='header'>
                       
            <h1> {element} Fitness club</h1>
        </div>
    );
};

export default Header;