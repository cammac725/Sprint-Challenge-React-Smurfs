import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/'>
        Smurf Home
      </NavLink>
      <NavLink to='/smurf-form'>
        Add a Smurf
      </NavLink>
    </div>
  )
}

export default Header;