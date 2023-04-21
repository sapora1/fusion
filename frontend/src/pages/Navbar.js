import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Chip } from '@mui/material';
export default function NavBar(){

    return(
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#000030 '}} variant="dark">
        {/* <Chip style={{marginLeft:'5px', backgroundColor: 'white'}} icon={<DataObjectIcon />} label="" /> */}
        
       {/* <Navbar.Brand href="/" style={{marginLeft:'5px'}}>FUSION</Navbar.Brand> */}
      <Container>
      <Chip style={{marginRight:'10px',fontSize: '20px', backgroundColor: '#B6D1DE'}} label="</> FUSION" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="#pricing">Cources</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Profile">Rahul</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}