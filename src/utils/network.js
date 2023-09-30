const SWAPI_URL = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch: ', res.status);
      return false;
    }

    return await res.json();
  } catch (err) {
    console.error('Could not fetch: ', err.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(SWAPI_URL + SWAPI_PEOPLE);
//   console.log(body);
// })();
