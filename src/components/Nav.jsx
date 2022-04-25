import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navDiv'>
      <div className='navDiv__Div'></div>
      <div className='navDiv__Div2'>
      <img id='logoHenry' alt='Logo' src={Logo} />
      <span> HENRY - WEATHER APP</span>
      <div className='navDiv__search'>
        <SearchBar onSearch={onSearch}/>
      </div>
      </div>
    </div>
  );
};

export default Nav;
