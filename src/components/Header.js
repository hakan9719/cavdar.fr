import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" variant="light" style={{backgroundColor:"#FFFF"}}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-end">
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#projects">Projet</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
