import { RouterProvider } from 'react-router-dom';
import router from '../../routes/routesConfig';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
