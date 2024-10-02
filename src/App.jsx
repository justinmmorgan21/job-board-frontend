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
          path: '/jobs',
          element: <JobsIndexPage />,
        },
      ],
    }
  ]);

  function App () { 
  return <RouterProvider router={router} />;
}

export default App