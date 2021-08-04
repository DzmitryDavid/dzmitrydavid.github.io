import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './GlobalStyles';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import MoreInfo from './pages/MoreInfo';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <MoreInfo />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
