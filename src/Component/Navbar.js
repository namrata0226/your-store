import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";
function Navbar() {
  const selectedItems = useSelector((state) => state.cart);
  console.log(selectedItems);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <h4 className="text">Product Items</h4>
      <nav className={navbarOpen ? "nav-mobile" : "menu_link"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <h6 className="text me-4">Added Items: {selectedItems.length}</h6>
      <span onClick={handleToggle} className="hamburgericon">
        {navbarOpen ? (
          <i>
            <RxCross1></RxCross1>
          </i>
        ) : (
          <i>
            <GiHamburgerMenu />
          </i>
        )}
      </span>
    </div>
  );
}

export default Navbar;
