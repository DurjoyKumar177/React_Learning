import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom' // Import Outlet from react-router-dom

//what is outlet?
// The Outlet component is a placeholder that renders the matched child route's element.

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 py-3">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout