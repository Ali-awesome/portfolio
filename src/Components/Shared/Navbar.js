import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/SaNaUllah.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='fixed top-0 left-10 right-10 lg:left-52 lg:right-52 z-10' >
            <div class="navbar text-white font-bold">
                <div class="navbar-start lg:hidden">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/home'}>THE S</Link></li>
                            <li><Link to={'/contact'}>THE POKE</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center md:hidden">
                    <Link to={'/home'}><img src={logo} alt="" className='w-36' /></Link>
                </div>
                <div class="lg:navbar-start hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to={'/home'}>THE S</Link></li>
                        <li><Link to={'/contact'}>THE POKE</Link></li>
                    </ul>
                </div>
                <div class="navbar-end text-white ">
                    <a href="https://www.linkedin.com/in/mohammad-sanaullah-1377a21ab/" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2 hover:text-cyan-600' icon={faLinkedin}></FontAwesomeIcon></a>
                    <a href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2' icon={faGithub}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;