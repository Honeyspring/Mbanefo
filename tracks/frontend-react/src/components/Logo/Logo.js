import React from 'react';
import './Logo.css'
import logo from '../icons/logo.png';
const Logo= ()=> {
    return(
        <div className='logo'>
              <img src={logo} alt='logo' style={{width:200}}/>
              
            </div>
    );
}
export default Logo;
