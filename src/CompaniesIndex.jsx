import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export function CompaniesIndex () { 
  const companies = useLoaderData();
  console.log(companies);
  const navigate = useNavigate();
  
  const companySubmit = (id) => { 
    // console.log(company);
    navigate(`/companies/${id}`) 
  };

  
  return ( 
  <div >
    <h1>All Companies</h1>
    <div className="cards">
    {
      companies.map((company) => (
        <div className="card" key ={company.id}>
        <h3>Name: {company.name}</h3>
        <img className={"logo"} src={company.logo}></img>
        <p>{company.description}</p>
        <button onClick={() => companySubmit(company.id)}>Jobs Information</button>
        <span> ({company.jobs.length} jobs)</span>
      </div>
      ))}
      </div>
  </div>
      
  )
}
 

//logo image 
//description 