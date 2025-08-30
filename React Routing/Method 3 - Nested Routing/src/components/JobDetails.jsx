import React from 'react'
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData();

  return ( 
    <div>
        <h2 className="text-2xl font-semibold">{jobDetails.title}</h2>
        <p className="text-sm">{jobDetails.company}</p>
        <p className="text-sm">{jobDetails.location}</p>
        <p className="mt-4">{jobDetails.description}</p>
        <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolore! 
            Necessitatibus, voluptatem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem. Quasi, voluptate. Nihil, architecto? 
            Voluptatem, quidem.
        </p>

    </div>
  )
}


export default JobDetails

export const JobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!res.ok) {
        throw Error('Failed to fetch job details');
    }
    return res.json();
}
