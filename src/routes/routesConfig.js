import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../containers/HomePage/HomePage';
import PeoplePage from '../containers/PeoplePage/PeoplePage';
import Layout from '../components/Layout/Layout';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import PersonPage from '../containers/PersonPage/PersonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/people',
        element: <PeoplePage />,
      },
      {
        path: '/people/:id',
        element: <PersonPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
