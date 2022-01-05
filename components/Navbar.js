import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light fixed-top bg-light shadow-sm'>
      <div className='container-lg'>
        <a className='navbar-brand main-color fw-bold fs-5' href='#'>
          {'<E.S />'}
        </a>
        <div className='dropdown'>
          <button
            className='btn btn-secondary btn-color px-3 py-1'
            type='button'
            id='dropdownMenuButton'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <i className='bi bi-list'></i>
          </button>
          <ul
            className='dropdown-menu dropdown-menu-end'
            aria-labelledby='dropdownMenuButton'
          >
            <li>
              <Link href='#home'>
                <a className='dropdown-item'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='#about'>
                <a className='dropdown-item'>About</a>
              </Link>
            </li>
            <li>
              <Link href='#portfolio'>
                <a className='dropdown-item'>Portfolio</a>
              </Link>
            </li>
            <li>
              <a className='dropdown-item' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
