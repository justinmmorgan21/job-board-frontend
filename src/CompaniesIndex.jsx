import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export function CompaniesIndex () { 
  const companies = useLoaderData();
  const navigate = useNavigate();
  
  const companySubmit = (company) => { 
    navigate(`/companies/${company.id}`) 
  };

  
  return ( 
  <div>
    <h1>All Companies</h1>
    {
      companies.map((company) => (
      <div key ={company.id}>
        <h2>Name: {company.name}</h2>
        <img src={company.logo}></img>
        <h2>{company.description}</h2>
        <button onClick={companySubmit(company)}>Jobs Information</button>
      </div>
      ))}
  </div>
  )
}
 

//logo image 
//description 