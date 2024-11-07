import React, { useContext } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../UserContext";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar expand='md' color="dark" dark>
      <NavbarBrand tag={Link} to="/">Jobly</NavbarBrand>
      <Nav>
        {!currentUser ?
          (
            <>
              <NavItem>
                <NavLink tag={Link} to="/login" className="nav-link">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )
          :
          (
            <>
              <NavItem>
                <NavLink tag={Link} to="/companies" className="nav-link">
                  Companies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/jobs" className="nav-link">
                  Jobs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/" className="nav-link" onClick={logout}>
                  {currentUser.username} Logout
                </NavLink>
              </NavItem>
            </>
          )}
      </Nav>
    </Navbar>
  )
};

export default NavBar;