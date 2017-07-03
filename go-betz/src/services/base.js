import _ from 'lodash';

import { ls } from './';

const create = (baseUrl, authHeaders = {}) => {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (ls.get('x-access-token')) {
    defaultHeaders['x-access-token'] = ls.get('x-access-token');
  }

  if (ls.get('x-admin-token')) {
    defaultHeaders['x-admin-token'] = ls.get('x-admin-token');
  }

  const updateHeaders = headers => {
    const expectedHeaders = ['x-access-token', 'x-admin-token'];

    for (let header of expectedHeaders) {
      if (headers.has(header)) {
        ls.save(header, headers.get(header));
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