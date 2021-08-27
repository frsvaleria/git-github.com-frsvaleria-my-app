import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-boostrap";




export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Kilometro 10</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Viajes Push</Nav.Link>
                            <Nav.Link href="#link">Low Coast</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Internacionales</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Nacionales</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Paquetes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Escapadas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;




