import React from 'react'
import { NavLink } from 'react-router'

function Home() {
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>

            <button class="btn btn-outline-success" type="submit">Sign In</button>
            <button class="btn btn-outline-primary" type="submit">
              <NavLink to="/dashboard">start</NavLink>
            </button>
          </div>
        </div>
      </nav>
      <header className='container border border-primary m-3 flex-row'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur at cum esse dignissimos. Maxime dicta voluptatibus, voluptate porro error officiis atque aliquid, deserunt, unde quae et minus veritatis iste!
        </p>

        <div>
          img
        </div>

      </header>
    </div>
  )
}

export default Home