import _ from 'lodash';

const create = (baseUrl, authHeaders = {}) => {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  const updateHeaders = headers => {
    const expectedHeaders = ['x-access-token'];

    for (let header of expectedHeaders) {
      if (headers.has(header)) {
        authHeaders[header] = headers.get(header);
      }
    }
  };

  const request = async (method, url, data) => {
    const options = method === 'GET' ? {} : { body: JSON.stringify(data) };
    const extendedOptions = Object.assign({}, options, {
      method,
      headers: Object.assign({}, defaultHeaders, authHeaders)
    });

    const fetchUrl = `${baseUrl}${url}`;

    const requestResponse = await fetch(fetchUrl, extendedOptions);

    updateHeaders(requestResponse.headers);

    const jsonResponse = await requestResponse.json();

    if (requestResponse.status >= 400 && requestResponse.status <= 499) {
      const errorMessage = _.get(jsonResponse, 'error.message') || _.get(jsonResponse, 'message');

      throw new Error(errorMessage);
    }

    return jsonResponse;
  };

  const get = _.partial(request, 'GET');
  const post = _.partial(request, 'POST');
  const put = _.partial(request, 'PUT');
  const destroy = _.partial(request, 'DELETE');

  const withRoute = route => create(`${baseUrl}/${route}`, authHeaders);

  return {
    get, post, put, destroy, withRoute
  };
};

export default {
  create
};