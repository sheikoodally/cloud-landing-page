import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import CloudSLogo from '../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import '../Css/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className={'navigationBar'}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            height= '60'
                            src={CloudSLogo}
                            className="d-inline-block align-top"
                        /></Navbar.Brand>
                    <Nav className="mr-auto"/>
                    <Nav>
                        <Nav.Link>
                            Features
                        </Nav.Link>
                        <Nav.Link >
                            Team
                        </Nav.Link>
                        <Nav.Link>
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
