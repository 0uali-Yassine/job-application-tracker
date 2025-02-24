import React from 'react';
import { NavLink, Outlet } from 'react-router';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button className="btn btn-outline-light" type="submit">Sign In</button>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className='dashboard-content'>
        <div className='sidebar'>
          <ul>
            <li>
              <NavLink to='' className="sidebar-link">Add Job</NavLink>
            </li>
            <li>
              <NavLink to='viewalljobs' className="sidebar-link">View All Jobs</NavLink>
            </li>
            <li>
              <NavLink to='edite' className="sidebar-link">Edit</NavLink>
            </li>
          </ul>
        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;