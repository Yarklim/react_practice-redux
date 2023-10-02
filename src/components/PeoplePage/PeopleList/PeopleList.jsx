import React from 'react';
import s from './PeopleList.module.scss';

const PeopleList = ({ people }) => {
  return (
    <ul>
      {people?.map(({ id, name, img }) => (
        <li className={s.card} key={id}>
          <img src={img} alt={name} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
