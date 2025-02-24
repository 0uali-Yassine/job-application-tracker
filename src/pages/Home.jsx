import React from 'react';
import { NavLink } from 'react-router'; // Corrected import

function Home() {
  return (
    <div className='home-container'>
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
            <button className="btn btn-outline-light me-2" type="submit">Sign In</button>
            <button className="btn btn-primary" type="submit">
              <NavLink to="/dashboard" className="nav-link-start">Start</NavLink>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className='home-header'>
        <div className='header-content'>
          <p className='header-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur at cum esse dignissimos. Maxime dicta voluptatibus, voluptate porro error officiis atque aliquid, deserunt, unde quae et minus veritatis iste!
          </p>
          <div className='header-image'>
            <img src="https://via.placeholder.com/400" alt="Placeholder" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;