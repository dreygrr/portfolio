import React from 'react';
import type { Tab } from "../types.ts";

import './footer.scss';

interface FooterProps {
  onChangeTab: (tab: Tab) => void;
}

const Footer: React.FC<FooterProps> = ({ onChangeTab }) => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 All rights reserved.</p>
        
        <div className='information'>
          <div className='links'>
            <p><b>Useful links</b></p>
            <ul>
              <li>
                <a
                 href='#'
                 onClick={() => onChangeTab('dev')}
                >Development</a>
              </li>
              <li>
                <a
                 href='#'
                 onClick={() => onChangeTab('motion')}
                >Motion Design</a>
              </li>
              <li>
                <a
                 href='#'
                 onClick={() => onChangeTab('anim')}
                >Animation</a>
              </li>
              <li>
                <a
                 href='#'
                 onClick={() => onChangeTab('contact')}
                >Contact</a>
              </li>
              <li>
                <a
                 href='#'
                 onClick={() => onChangeTab('about')}
                >About</a>
              </li>
            </ul>
          </div>

          <div className='profile'>
            <div className="profile-info">
              <button type='button' onClick={() => onChangeTab('contact')} className='btn btn-primary'>Get in touch</button>

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