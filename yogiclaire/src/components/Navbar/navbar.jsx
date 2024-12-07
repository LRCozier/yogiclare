import React from "react";

const Navbar = () => {

  // Toggle navigation menu on mobile
document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});

  return(
    <>
     <div id="navbar-container">
      <nav id="navbar">
      <input type="checkbox" id="menu-toggle"/>
      <label for="menu-toggle" class="hamburger">&#9776;</label>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>Classes</li>
          <li>Yoga In Education</li>
          <li>Contact</li>
        </ul>
      </nav>
     </div>
    </>
  )
}

export default Navbar;