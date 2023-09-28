const SWAPI_URL = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

export const getApiResource = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => console.log(body));
};

getApiResource(SWAPI_URL + SWAPI_PEOPLE);
