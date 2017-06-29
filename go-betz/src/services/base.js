import _ from 'lodash';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const headersNameAuthentication = ['access-token', 'token-type', 'client', 'expiry', 'uid'];

const create = (baseUrl, headersAuthentication = {}) => {

  const updateHeaders = headers => {
    for (let headerName of headersNameAuthentication) {
      if (headers.has(headerName)) {
        headersAuthentication[headerName] = headers.get(headerName);
      }
    }
  };

  const request = async (method, uri, data) => {
    const esc = encodeURIComponent;
    const query = method === 'GET' ? Object.keys(data || {})
        .map(k => esc(k) + '=' + esc(data[k]))
        .join('&') : undefined;

    const settings = method === 'GET' ? {} : { body: JSON.stringify(data) };

    const response = await fetch(`${baseUrl}${uri}${query ? '?' + query : ''}`, _.assign(settings, {
      method: method,
      headers: _.assign({}, headers, headersAuthentication),
    }));

    updateHeaders(response.headers);
    const responseAsJson = await response.json();

    if (response.status >= 400 && response.status <= 499) {
      const errors = _.get(responseAsJson, 'errors.full_messages') || _.get(responseAsJson, 'errors')
      const message = _.join(_.uniq(errors), '\n') || responseAsJson;
      throw new Error(message);
    }

    return responseAsJson;
  }

  const get = _.partial(request, 'GET');
  const post = _.partial(request, 'POST');
  const put = _.partial(request, 'PUT');
  const destroy = _.partial(request, 'DELETE');

  const withRoute = route => create(`${baseUrl}/${route}`, headersAuthentication);

  return { get, post, put, destroy, withRoute };
};

export default { create };