import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../components/logo.jpg';
import {LinkContainer} from 'react-router-bootstrap'
import {  useState} from 'react';
import {useEffect} from 'react'
import './NavbarStyle.css'

function CollapsibleExample() {
  const [showMenu ,setShowMenu] = useState(0);
  const [showService , setShowService] = useState(0);
  const [navbarColor , setNavbarColor] = useState ("blue");
  const[linkColor , setLinkColor] = useState("#f0f0f0");
  const changeBack =() => {
    if(window.scrollY >= 80){
      setNavbarColor("#f0f0f0");
      setLinkColor("#01017e");
    }else{
      setNavbarColor("blue");
      setLinkColor("#f0f0f0");
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll" , changeBack);
    return ()=> window.removeEventListener("scroll", changeBack);
  });
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: navbarColor}}>
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="logo" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to='/' style={{color : linkColor}} >
              <Nav.Link style={{color : linkColor}}  >Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/app' style={{color : linkColor}} >
            <Nav.Link style={{color : linkColor}}  >A propos</Nav.Link>
            </LinkContainer>
            <NavDropdown style={{color : linkColor}}  title="Notre Etablisement" show={showMenu} onMouseEnter={()=>setShowMenu(true)} onMouseLeave={()=>{setShowMenu(false)}} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Infrastructure</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Calandrier Scolaire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{color : linkColor}}  title="Nos Services "show={showService} onMouseEnter={()=>setShowService(true)} onMouseLeave={()=>setShowService(false)}  id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Campus </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Terrain et Salle </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Cantine Scrolaire</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='nav_left' >
            <Nav.Link href="#deets" style={{color : linkColor}}  >Comment S'inscrire?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;