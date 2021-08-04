import React from 'react'
import { Navbar,Nav,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NaviBar = () => {
    return (
        <div>
          
            <Navbar bg="light" expand="lg">
              
              <Navbar.Brand href="#home" style={{marginLeft:'700px'}}>Users</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
              </Nav>
 
              <div style={{marginLeft:300}}>
              <Button variant="outline-info"><Link to="/registre">Registre</Link></Button>{' '}
              <Button variant="outline-info" ><Link to="/login">Login</Link></Button>
            </div>
     
  </Navbar>
        </div>
    )
}

export default NaviBar
