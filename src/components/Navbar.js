import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Navbar.css';




function Navbar() {
    return (
        <nav className='navbar'>
                <p className='navbar__rotation'>Apex Map Rotation/Battle Royale</p> 
            <div className='navbar__icons'>
                <Icon className='bell-icon navbar__icon' name='circular bell'/>
                <Icon className='calendar-outline navbar__icon' name='circular calendar alternate outline icon'/>
                <Icon  className='bars-icon navbar__icon' name='circular bars icon'/>
            </div>
        
        </nav>
    )
}

export default Navbar
