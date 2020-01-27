import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        Jetcake
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item href="#">
                            Home
                            </Navbar.Item>
                        <Navbar.Item href="#">
                            Profile
                            </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default NavBar;
