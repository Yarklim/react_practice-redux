import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import s from './PeoplePage.module.scss';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImg(id);

      //   console.log(img);

      return {
        id,
        name,
        img,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <ul>
        {people?.map(({ id, name, img }) => (
          <li className={s.card} key={id}>
            <img src={img} alt={name} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PeoplePage;
