import React from 'react'
import { NavLink } from 'react-router'

function Addjobs() {
  return (
    <div>
      Addjobs
      <NavLink to='/dashboard/addjobform'>

      <button class='btn btn-success'>add</button>
      </NavLink>
    </div>
  )
}

export default Addjobs