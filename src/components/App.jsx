import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, contact, footer }}>
      <Hero />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
