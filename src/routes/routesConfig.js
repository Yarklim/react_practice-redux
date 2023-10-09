import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../constants/HomePage/HomePage';
import PeoplePage from '../containers/PeoplePage/PeoplePage';
import Layout from '../components/Layout/Layout';

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
    ],
  },
]);

export default router;
