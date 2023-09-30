import s from './App.module.scss';
import clsx from 'clsx';

function App() {
  return (
    <>
      <h1 className={clsx(s.title, s.color)}>Hello Yar</h1>
    </>
  );
}

export default App;
