import React from "react";
import littleLemonLogo from "../images/logo.png";

const Nav = () => {
  // Array of menu items
  const menuItems = [
    { text: "Home", link: "#" },
    { text: "About", link: "#" },
    { text: "Menu", link: "#" },
    { text: "Reservations", link: "#" },
    { text: "Order Online", link: "#" },
    { text: "Login", link: "#" },
  ];

  return (
    <nav>
      <img src={littleLemonLogo} alt="Little Lemon Logo" />
      <ul>
        {/* Mapping over the menuItems array */}
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
