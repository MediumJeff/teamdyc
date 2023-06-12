import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <header>
        <h1>NavBar</h1>
      </header>
     </div>
  )
};
