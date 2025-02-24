import React from 'react';
import { NavLink } from 'react-router'; // Corrected import

function Addjobs() {
  return (
    <div className='addjobs-container'>
      <h2 className='addjobs-title'>Add Jobs</h2>
      <NavLink to='/dashboard/addjobform'>
        <button className='btn btn-success add-button'>Add Job</button>
      </NavLink>
    </div>
  );
}

export default Addjobs;