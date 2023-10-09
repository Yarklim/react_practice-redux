import React from 'react';
import { Link } from 'react-router-dom';
import s from './PeopleList.module.scss';

const PeopleList = ({ people }) => {
  return (
    <ul className={s.listContainer}>
      {people?.map(({ id, name, img }) => (
        <li className={s.listItem} key={id}>
          <Link to="#" className={s.listLink}>
            <img className={s.personPhoto} src={img} alt={name} />
            <p className={s.itemTitle}>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
