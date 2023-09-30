import { useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import s from './PeoplePage.module.scss';

const PeoplePage = () => {
  const getResource = async (url) => {
    const body = await getApiResource(url);
    console.log(body);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <>PeoplePage</>;
};

export default PeoplePage;
