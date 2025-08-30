import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mx-auto mt-20">Jobs Layout</h1>
      <h2 className="text-2xl font-semibold text-center mx-auto mt-10">Find Your Dream Job</h2>
<br />
      <Outlet />
    </div>
  )
}

export default JobsLayout