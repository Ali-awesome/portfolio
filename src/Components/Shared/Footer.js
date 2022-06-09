import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer class="footer items-center p-4 bg-neutral text-neutral-content">
                <div className='w-3/4 mx-auto grid-cols-1 md:grid-cols-2 '>
                    <div class="items-center my-auto">
                        <p>Copyright © 2022 - All right reserved by <strong>Mohammad Sanaullah</strong></p>
                    </div>
                    <div class="justify-self-end">
                        <a href="https://www.linkedin.com/in/mohammad-sanaullah-1377a21ab/" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2' icon={faLinkedin}></FontAwesomeIcon></a>
                        <a href="https://github.com/Ali-awesome" target="_blank"><FontAwesomeIcon className='h-7 w-7 ml-2' icon={faGithub}></FontAwesomeIcon></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;