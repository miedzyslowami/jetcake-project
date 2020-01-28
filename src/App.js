import React from 'react';
import './App.scss';
import Home from 'Home';
import Profile from 'Profile';
import Footer from 'Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bulma-components/lib/components/navbar';


function App() {
  return (
    <Router>
      <Navbar>
        <Navbar.Brand>
          <p className="navbar-item">Jetcake-project</p>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Link className="navbar-item" to='/'> Home</Link>
            <Link className="navbar-item" to="/profile">Profile</Link>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
