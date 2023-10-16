import { Link, useLocation } from 'react-router-dom';
import img from '../../assets/images/404.png';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div className={s.wrapper}>
      <img src={img} alt="not found" className={s.img} />
      <p className={s.text}>
        No match for: <Link className={s.link}>{location.pathname}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
