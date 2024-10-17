import { Header } from './Header';
import { Footer } from './Footer';
import { JobsIndexPage } from './JobsIndexPage';
import { CompaniesIndex } from './CompaniesIndex';
import { CompaniesShowPage } from './CompaniesShowPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios';
import { SignupPage } from './SignupPage';
import { LoginPage } from './LoginPage';
import { LogoutLink } from "./LogoutLink";

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
            loader: () => axios.get(`http://localhost:3000/companies.json`).then(response => response.data)
          },
          {
            path: '/companies/:id',
            element: <CompaniesShowPage />,
            loader: ({params}) => axios.get(`http://localhost:3000/companies/${params.id}.json`).then(response => response.data)
          },
          { 
          path: '/',
          element: <JobsIndexPage />,
          loader: () => axios.get('http://localhost:3000/jobs.json').then(response => response.data)
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