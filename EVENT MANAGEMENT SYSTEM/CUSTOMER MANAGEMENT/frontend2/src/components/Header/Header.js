//import {Navbar} from "react-bootstrap";

//const Header=() =>{
 // return (
    
    import { 
      //Button, 
      Container, 
      Form, 
      FormControl,
      Nav, 
      Navbar,
      NavDropdown,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
  
  const Header = () =>{
      return (
          <Navbar bg="primary" expand="lg" variant="dark">
              <Container>
              <Navbar.Brand >
                <Link to="/">Rusty Deco</Link>
                
                
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
  
                <Nav className='m-auto'>
                <Form inline>
                <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2"
              />
            
            </Form>
              
            </Nav>
  
              <Nav className="me-auto">
                <Nav.Link href="/mynotes">
                  <Link to="/mynotes"> My Details</Link>
                 
                  </Nav.Link>
         
                <NavDropdown title="Nimal D Silva" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
            
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
                  
        </Container>
  
      
  </Navbar>
      );
  };
  
  


export default Header;