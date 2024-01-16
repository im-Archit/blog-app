import { NavLink as ReactLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../auth";
import { getCurrentUserDetail } from "../auth";

import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  return (
    <Navbar color="dark" dark expand="md" fixed="top" className="px-5">
      <NavbarBrand tag={ReactLink} to="/">
        MyBlog
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/services">
              Contact Us
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={ReactLink} to="/services">
                Services
              </DropdownItem>
              <DropdownItem>Facebook</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Youtube</DropdownItem>
              <DropdownItem>Instagram</DropdownItem>
              <DropdownItem>LinkedIn</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

        <Nav navbar>
          {login && (
            <>
              <NavItem>
                <NavLink>Logout</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>archit3435@gmail.com</NavLink>
              </NavItem>
            </>
          )}

          {
                !login && (
                  <>
                  <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
                  
                  </>
                )

          }
       

      
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
