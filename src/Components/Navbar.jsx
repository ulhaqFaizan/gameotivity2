import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  return (
    <div className="">
      <Navbar className="ml-auto" bg="" variant="dark" collapseOnSelect expand="lg" sticky="top">
        <Navbar.Brand href="#home"><h1 className="heading"><span className="blue">G</span>AMEOTIVITY</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nl-margin" >
            {/* <Nav.Link className="nav-links" href="">About Us</Nav.Link> */}
            <Nav.Link className="nav-links" href="#features">Features</Nav.Link>
            <Nav.Link className="nav-links" href="#product">Products</Nav.Link>
            <Nav.Link className="nav-links" href="#team">Team</Nav.Link>
            {/* <Nav.Link className="nav-links" href="#">Contact</Nav.Link> */}
            <Nav.Link className="nav-links" href="https://gameotivity-1.gitbook.io/white-paper/">White Paper</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;