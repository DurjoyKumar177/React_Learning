import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const Navigate = useNavigate();

  return (
    <div>
        <h1 className="text-5xl font-bold text-center mx-auto mt-20">404 - Page Not Found</h1>

        <br />
        <br />
        <button onClick={() => Navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Home</button>
    </div>
  )
}

export default NotFound