import React from 'react';
import { Route, Switch } from 'react-router';

import AboutSection from "./components/AboutSection";
import Nav from './components/Nav';
import Contacts from './pages/Contacts';
import GlobalStyles from './GlobalStyles';
import ProjectDetails from './pages/ProjectsDetails'

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
          <ProjectDetails/>
        </Route> */}
        
      </Switch>
    </div>
  );
}

export default App;
