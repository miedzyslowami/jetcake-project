import React from 'react';
import './App.scss';
import Home from 'Home';
import Profile from 'Profile';
import Footer from 'Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { AuthProvider } from 'Auth';
import PrivateRoute from 'PrivateRoute';
import Login from 'Login';
import Register from 'Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar className='is-primary is-size-4'>
          <Navbar.Brand>
            <p className='navbar-item'>Jetcake-project</p>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Link className='navbar-item' to='/'> Home</Link>
              <Link className='navbar-item' to='/profile'>Profile</Link>
              <Link className='navbar-item' to='/login'>Login</Link>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
        <Switch>
        <PrivateRoute path='/profile' component={Profile} />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
