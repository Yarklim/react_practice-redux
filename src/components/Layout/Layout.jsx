import { Suspense } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Suspense fallback={<hi>...Loading</hi>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
