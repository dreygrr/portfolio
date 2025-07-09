import React, { useState } from 'react';

import type { Tab } from './types.ts';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Development } from './pages/Dev.tsx';
import { Motion } from './pages/Motion';
import { Anim } from './pages/Anim.tsx';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

import './main.scss';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dev');

  return (
    <div className='app'>
      {activeTab === 'dev' && <Development />}
      {activeTab === 'motion' && <Motion />}
      {activeTab === 'anim' && <Anim />}
      {activeTab === 'contact' && <Contact />}
      {activeTab === 'about' && <About />}
      <Footer onChangeTab={setActiveTab} />
      <Navbar activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  )
}

export { App };
