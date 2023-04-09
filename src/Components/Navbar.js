import React from "react";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'dark' ?'light':'black'}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'dark' ?'light':'black'}`} to="/about">{props.aboutTextUtils}</Link>
          </li>
        </ul>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="switch1" onClick={props.toggleMode} />
          <label className={`custom-control-label text-${props.mode === 'dark' ?'light':'black'}`} htmlFor="switch1" >{props.mode} Mode</label>
        </div>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}

      </div>
    </nav>
  );

}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutTextUtils : PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title : 'set the title',
  aboutTextUtils : 'set about text'
};
