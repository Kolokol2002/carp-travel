import React from "react";

const Navigation = () => {
  return (
    <div className="menu">
      <button className="nav-button">Close</button>
      <ul className="nav">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
