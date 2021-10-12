import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './About';
import CurrentFilm from './CurrentFilm';
import Films from './Films';
import Button from "@mui/material/Button";
import './App.css'
function App() {
  
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Button component={Link} to={"/"}>Home</Button>
            </li>
            <li>
              <Button component={Link} to={"/about"}>About</Button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:id" children={<CurrentFilm />} />
          <Route path="/">
            <Films />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



