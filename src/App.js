import React from 'react';
import logo from './logo.svg';
import './App.css';

import Projects from './components/Projects'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Follow from './components/Followus'
import Banner from './components/Banner'
import WritingServices from './components/WritingServices'



function App() {
  return (
    <div className="App">
        
      
      <Banner/>
      {/*<Projects/>*/}
      <WritingServices/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Follow/>
      
    </div>
  );
}

export default App;
