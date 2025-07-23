import React from 'react';

import './footer.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 All rights reserved.</p>
        
        <div className='information'>
          <div className='links'>
            <p><b>Useful links</b></p>
            <ul>
              <li>
                <Link to="/dev">Development</Link>
              </li>
              <li>
                <Link to="/motion">Motion Design</Link>
              </li>
              <li>
                <Link to="/anim">Animation</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className='profile'>
            <div className="profile-info">
              <Link to="/contact" className='btn btn-primary'>Get in touch</Link>

              <ul className='socials'>
                <li><a href="https://www.github.com/dreygrr" target="_blank"><i className='fa-brands fa-github' /></a></li>
                <li><a href="https://www.linkedin.com/in/andrey-assis-70165225b/" target="_blank"><i className='fa-brands fa-linkedin' /></a></li>
                <li><a href="https://www.instagram.com/drey.motion/" target="_blank"><i className='fa-brands fa-instagram' /></a></li>
                <li><a href="mailto:dreygrr@gmail.com" target="_blank"><i className='fa-light fa-envelope' /></a></li>
              </ul>
              
              <h3>Andrey de Assis</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };