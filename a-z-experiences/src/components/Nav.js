import React from 'react';
import { NavLink } from 'react-router-dom';

function logout() {
  localStorage.clear('token')
}

function Nav(props) {
  return (
    <div className="navigation">
        {localStorage.getItem('token') ? <button to="login" onClick={logout}>Logout</button> : <NavLink to="/login">Login</NavLink>}
        <NavLink to="/SignUp">Sign Up</NavLink>
        <NavLink to="/Dashboard">DashBoard</NavLink>
        <NavLink to="/AddExperience">Add Experience</NavLink>
    </div>
  );
}

export default Nav;
