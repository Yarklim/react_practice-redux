import React from 'react';
import s from './PeopleList.module.scss';

const PeopleList = ({ people }) => {
  return (
    <ul className={s.listContainer}>
      {people?.map(({ id, name, img }) => (
        <li className={s.listItem} key={id}>
          <a className={s.listLink} href="#">
            <img className={s.personPhoto} src={img} alt={name} />
            <p className={s.itemTitle}>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
