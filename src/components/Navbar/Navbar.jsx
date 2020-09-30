import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CartBadge from './CartBadge'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";


const Example = () => {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className={styles.navbar}>
        <NavbarBrand href="/" className={styles.nav_brand}>
          Shopping <span className={styles.black}>Cart.</span>{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={styles.nav_toggler} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className={styles.nav_item}>
              <Link to="/" className={styles.nav_link}>
                Home
              </Link>
            </NavItem>

            <NavItem className={styles.nav_item}>
              <Link to="/shop" className={styles.nav_link}>
                Shop
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to="/cart" className={styles.nav_link}>
              <CartBadge/>
            </Link>{" "}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
