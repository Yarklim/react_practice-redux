import { HTTP, HTTPS } from '../constants/api';

/**
 * Changing URL with HTTP on HTTPS
 * @param {String} url - url for change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Send request Fetch
 * @param {String} url - url for request
 * @returns {Promise} - Promise with response
 */
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
