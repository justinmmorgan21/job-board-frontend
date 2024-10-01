import {useLoaderData} from 'react-router-dom';

export function JobsIndexPage() {
  const jobs = useLoaderData();

  return (
    <div>
      <h1>All Jobs</h1>
      <div>
        {
          jobs.map(job => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>salary: {job.salary_range}</p>
              <p>location: {job.location}</p>
              <a href="{job.url}">apply here</a>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}
