import { Link } from 'react-router-dom';
import UiButton from '../UI/UiButton/UiButton';
import s from './PeopleNavigation.module.scss';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={s.linkWrapper}>
      <Link to={`/people/?page=${counterPage - 1}`}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

export default PeopleNavigation;
