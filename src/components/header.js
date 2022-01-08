import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">top</Link></li>
          <li><Link to="/about" >about</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;