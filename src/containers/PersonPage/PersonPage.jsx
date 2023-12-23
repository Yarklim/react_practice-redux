// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { getApiResource } from '../../utils/network';

// import s from './PersonPage.module.scss';

const PersonPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p style={{ fontSize: 24, color: 'white' }}>{id}</p>
    </div>
  );
};

export default PersonPage;
