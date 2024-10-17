import {useLoaderData} from 'react-router-dom';

export function CompaniesShowPage() {

  const company = useLoaderData();
  console.log(company);
  return (
    <div>
      <h1>{company.name}</h1>
      <div>
        {
          company.jobs.map(job => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>salary: {job.salary_range}</p>
              <p>location: {job.location}</p>
              <a href="{job.url}">apply here</a>
              <p>company id: {job.company_id}</p>
              <p>active: {job.active}</p>
              <p>job id: {job.id}</p>
              <hr />
            </div>
          ))
        }
      </div>
    </div>
  )
}
