
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle:false }

        this.toggle =this.toggle.bind(this)
    }
    
    toggle(){
      this.setState({ toggle:!this.state.toggle  });
    }
    render() { 
        return (  
           <div>
            <Navbar color="secondary" light expand="md">
              <NavbarBrand href="/">Eedo-Cake</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.toggle} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="http://localhost:3000/#/gallery">ORDER CAKE</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://www.instagram.com/eedocake">CONTACT</NavLink>
                  </NavItem>
                
                </Nav>
              </Collapse>
            </Navbar>
          </div>);
    }
}
 
export default Header;