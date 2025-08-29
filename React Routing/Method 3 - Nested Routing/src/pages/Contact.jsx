import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const Navigate = useNavigate();

  return (
    <div>
        <h1 className="text-5xl font-bold text-center mx-auto mt-20">This is Contact Page</h1>
        <button onClick={() => Navigate('form')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">Contact Form</button>
        <button onClick={() => Navigate('info')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Info</button>
    </div>
  )
}

export default Contact