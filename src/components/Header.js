import React from 'react';
import Logo from './Logo';
import '../assets/css/Header.css';

function Header() {
  return (
    <header className='p-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='logo text-center'>
                        <Logo />
                    </h1>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
