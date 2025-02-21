import React from 'react'
import { NavLink, Outlet } from 'react-router';

function Dashboard() {
  return (
    <div className='container-fluid'>
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
           
          </div>
        </div>
      </nav>
      
      <div className='container d-flex mt-4 p-5'>
        <div className='p-2  border border-info' style={{height:"auto"}}>
          <ul>
            <li>
              <NavLink to=''>
                Add Job
              </NavLink>
            </li>
            <li>
              <NavLink to='viewalljobs'>
              View ALL Jobs
              </NavLink>
              </li>

            <li>
              <NavLink to='edite'>
               Edite
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=' p-2 flex-grow-1 border border-primary' style={{height:"auto"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;