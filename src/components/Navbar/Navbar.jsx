import React, { useState } from "react";
import styles from "./Navbar.module.css";
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
import { Badge } from "reactstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

const Example = () => {
  const cartState = useSelector((state) => state.items);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(cartState.length);

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
              <AiOutlineShopping size={25} />
              {cartState.length > 0 && (
                <Badge color="success" pill>
                  {cartState.length}
                </Badge>
              )}
            </Link>{" "}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
