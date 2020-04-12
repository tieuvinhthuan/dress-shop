import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper light-green darken-2">
      <div className="container">
        <Link className="brand-logo" to="/">Oh-la-Le Shop</Link>
        <ul className="right">
          <li><NavLink exact to="/">Main Page</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
         
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);