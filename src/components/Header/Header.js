import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
                       
            <h1><FontAwesomeIcon icon={['fab', 'apple']} />Fitness club</h1>
        </div>
    );
};

export default Header;