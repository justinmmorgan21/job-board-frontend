import { Header } from './Header';
import { Footer } from './Footer';
import { JobsIndexPage } from './JobsIndexPage';
import { CompaniesIndex } from './CompaniesIndex';
import { CompaniesShowPage } from './CompaniesShowPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import api from './api'

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
            loader: () => axios.get("/companies.json").then(response => response.data)
          },
          {
            path: '/companies/:id',
            element: <CompaniesShowPage />,
            loader: ({params}) => axios.get("/companies/"+ params.id + ".json").then(response => response.data)
          },
          {
            path: '/',
            element: <JobsIndexPage />,
            loader: () => {
              const url = "/jobs.json"; // This should work with your baseURL
              console.log("Request URL:", url); // Log just the path
          
              return api.get(url) // Use your custom axios instance
                .then(response => {
                  console.log("Response Data:", response.data);
                  return response.data;
                })
                .catch(error => {
                  console.error("Error fetching data:", error); // Log any errors
                });
            },
          },
          {
            path: '/signup',
            element: <SignupPage />
          },
          {
            path: '/login',
            element: <LoginPage />
          }
        ],
    }
  ]);

  function App () { 
  return <RouterProvider router={router} />;
}

export default App