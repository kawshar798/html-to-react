import React from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/pages/About';
import Service from './components/pages/Service';
import Portfolio from './components/pages/Portfolio';
import Team from './components/pages/Team';

function App() {
  return (
    <Router>
    <PageWrapper>
        <Switch>

          <Route path="/" exact="true">
          <Home/>
          </Route>
         
          {/* <About/>
            <Route path="/about" exact="true">
              <About/>
          </Route>
          <Route path="/services" exact="true">
          <Service />
          </Route>
          <Route path="/portfolio" exact="true">
         <Portfolio/>
          </Route> */}
        </Switch>
        <Service />
        <About/>
        <Portfolio/>
     <Team/>
      </PageWrapper>
    </Router>
  
   
  );
}

export default App;
