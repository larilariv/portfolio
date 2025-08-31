import React from 'react';

import { Footer, Navbar } from "./components";
import { About, Home, Projects } from './pages'

import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="home" className="element" >
        <Home />
      </Element>

      <Element name="about" className="element" >
        <About />
      </Element>

      <Element name="projects" className="element" >
        <Projects />
      </Element>

      <Element name="footer" className="element" >
        <Footer />
      </Element>
    </div>
  );
}

export default App;
