import React from 'react';
import AboutSection from "./components/AboutSection";
import Nav from './components/Nav';

import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav/>
      <AboutSection/>
    </div>
  );
}

export default App;
