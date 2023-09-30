import clsx from 'clsx';
import PeoplePage from '../PeoplePage/PeoplePage';
import s from './App.module.scss';

function App() {
  return (
    <>
      <h1 className={clsx(s.title, s.color)}>Hello Yar</h1>
      <PeoplePage />
    </>
  );
}

export default App;
