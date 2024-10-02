import { Header } from './Header';
import { Footer } from './Footer';
import { JobsIndexPage } from './JobsIndexPage';
import { CompaniesIndex } from './CompaniesIndex';
import { CompaniesShowPage } from './CompaniesShowPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios';

  const router = createBrowserRouter([
      {
        element: (
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        ),
        children: [
          {
            path: '/companies',
            element: <CompaniesIndex />,
            loader: () => {
              return [
                {
                  id: 5,
                  name: "Applebees",
                  logo: "aplbesLogo.jpg",
                  description: "funnerest place to work ever",
                  jobs: [
                    {
                      id: 1,
                      company_id: 5,
                      title: "sales manager",
                      description: "oversee a team of salespeople",
                      url: "sales_jobs@money.com",
                      location: "Los Angeles, CA",
                      active: true,
                      salary_range: "$80k - $130k"
                    },
                    {
                      id: 3,
                      company_id: 5,
                      title: "transaction compliance officer",
                      description: "keep people honest",
                      url: "hr_jobs@money.com",
                      location: "Dallas, TX",
                      active: true,
                      salary_range: "$50k - $55k"
                    }
                  ]
                },
                {
                  id: 7,
                  name: "Foot Locker",
                  logo: "fl.png",
                  description: "selling shoes is fun, yay!",
                  jobs: []
                }
              ]
            }
            // axios.get(`http://localhost:3000/companies.json`).then(response => response.data)
          },
          {
            path: '/companies/:id',
            element: <CompaniesShowPage />,
            loader: ({ params }) => axios.get(`http://localhost:3000/companies/${params.id}.json`).then(response => response.data)
          },
          { 
          path: '/',
          element: <JobsIndexPage />,
          loader: () => {
            return [
              {
                id: 1,
                company_id: 5,
                title: "sales manager",
                description: "oversee a team of salespeople",
                url: "sales_jobs@money.com",
                location: "Los Angeles, CA",
                active: true,
                salary_range: "$80k - $130k"
              },
              {
                id: 2,
                company_id: 7,
                title: "IT dept",
                description: "help people find the power switch",
                url: "jobs@jobs.gov",
                location: "New York City, NY",
                active: true,
                salary_range: "$90k - $110k"
              },
              {
                id: 3,
                company_id: 5,
                title: "transaction compliance officer",
                description: "keep people honest",
                url: "hr_jobs@money.com",
                location: "Dallas, TX",
                active: true,
                salary_range: "$50k - $55k"
              }
            ]
          }
        }
      ],
    }
  ]);

  function App () { 
  return <RouterProvider router={router} />;
}

export default App