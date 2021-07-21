import React from 'react';
import { Route, Switch } from 'react-router';

import AboutSection from "./components/AboutSection";
import Nav from './components/Nav';
import Contacts from './pages/Contacts';
import GlobalStyles from './GlobalStyles';
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
        <Nav/>
      <Switch>
        <Route exact path="/">
          <AboutSection />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        {/* <Route path="/projects/:id">
          <ProjectDetail/>
        </Route> */}
        
      </Switch>
    </div>
  );
}

export default App;
