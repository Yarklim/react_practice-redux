import { useEffect, useState } from 'react';
import { getApiResource, changeHTTP } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import {
  getPeopleId,
  getPeopleImg,
  getPeoplePageId,
} from '../../services/getPeopleData';
import { withErrorApi } from '../../hoc/withErrorApi';
import PeopleList from '../../components/PeopleList';
import s from './PeoplePage.module.scss';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryPage]);

  return (
    <section className={s.wrapper}>
      (<h1 className="header-text">People</h1>
      <div>
        {people ? (
          <PeopleList people={people} />
        ) : (
          <h2 className={s.loading}>...Loading</h2>
        )}
      </div>
      )
    </section>
  );
};

export default withErrorApi(PeoplePage);
