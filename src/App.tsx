import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Development } from './pages/Dev.tsx';
import { Motion } from './pages/Motion';
import { Anim } from './pages/Anim.tsx';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ProjectPage } from './pages/ProjectPage.tsx';

import './main.scss';
import { AboutMe } from './pages/AboutMe.tsx';

const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dev" replace />} />

          <Route path='/dev' element={<Development />} />
          <Route path='/dev/:id' element={<ProjectPage />} />

          <Route path='/motion' element={<Motion />} />
          <Route path='/motion/:id' element={<ProjectPage />} />

          <Route path='/anim' element={<Anim />} />
          <Route path='/anim/:id' element={<ProjectPage />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/me' element={<AboutMe />} />
        </Routes>
        
        <Footer />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export { App };
