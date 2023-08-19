import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollAnimationComponent from './components/ScrollAnimationComponent';
import Footer from './components/Footer';

const App = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Projects/>
      <Contact/>
      <ScrollAnimationComponent/>
      <Footer />
    </div>
  );
}

export default App;
