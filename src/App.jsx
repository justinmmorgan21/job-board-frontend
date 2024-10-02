import { Header } from './Header';
import { Footer } from './Footer';
import { JobsIndexPage } from './JobsIndexPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';



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