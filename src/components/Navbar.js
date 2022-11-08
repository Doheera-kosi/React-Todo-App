import React, { useState } from 'react';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>...</ul>
    </nav>
  );
}
export default Navbar;
