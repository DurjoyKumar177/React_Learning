import React from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const JobsData = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {JobsData.map((job) => {
            return (
                <Link to={job.id.toString()} key={job.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-500 dark:border-gray-700 ">
                    <h2 className="text-2xl font-semibold">{job.title}</h2>
                    <p className="text-sm">{job.company}</p>
                    <p className="text-sm">{job.location}</p>
                    <p className="mt-4">{job.description}</p>
                </Link>
            );
        })}
    </div>
  )
}

export default Jobs

export const JobsLoader = async () => {
    const res = await fetch('http://localhost:5000/jobs');
    if (!res.ok) {
        throw new Error('Failed to fetch jobs');
    }
    return res.json();
}
