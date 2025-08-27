import React from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className='container mx-auto px-6 py-3 flex justify-between'>
        <a href="/" className='font-semibold text-xl text-white'>
          Navbar
        </a>
        <div className='hidden md:flex !items-center'>
          <ul className='flex !items-center'>
            <li className='mr-6'>
              <Link to="/" className='text-xl text-white hover:text-gray-300'>
                Home
              </Link>
          </li>
          <li className='mr-6'>
            <Link to="/about" className='text-xl text-white hover:text-gray-300'>
              About
            </Link>
          </li>
          <li className='mr-6'>
            <Link to="/contact" className='text-xl text-white hover:text-gray-300'>
              Contact
            </Link>
          </li>
          <li className='mr-6'>
            <Link to="/product" className='text-xl text-white hover:text-gray-300'>
              Product
            </Link>
          </li>
        </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
