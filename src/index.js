import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProfileSection from './components/ProfileSection';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Education from './components/Education';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ProfileSection style={{ animationDelay: '0.2s' }} />
    <AboutMe style={{ animationDelay: '0.4s' }} />
    <Skills style={{ animationDelay: '0.6s' }} />
    <Education style={{ animationDelay: '0.8s' }} />
    <Certificates style={{ animationDelay: '0.9s' }} />
    <Projects style={{ animationDelay: '1.0s' }} />
    <Contact style={{ animationDelay: '1.2s' }} />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
