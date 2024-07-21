import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styling/Sidebar.css"

const Sidebar = () => {
  return (
    <div className='Sidebar-cta'>
      <aside>
      <ul className='Sidebar-list'>
        <li> <NavLink to="customers">Customers</NavLink> </li>
        <li> <NavLink to="orders">Orders</NavLink> </li>
        <li> <NavLink to="products">Products</NavLink> </li>
      </ul>
    </aside>
    </div>  
  )
}

export default Sidebar