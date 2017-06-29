import _ from 'lodash';
import BaseApi from './base';
import repositories from './repositories';

const signUp = async (url, attributes) => {
  const fetchApi = BaseApi.create(url.trim());
  let { status, data, errors } = await fetchApi.post('/auth', attributes);

  if (_.has(errors, 'full_messages')) {
    errors = errors.full_messages;
  }

  if (status === 'error') {
    throw new Error(_(errors).uniq().join('\n'));
  }

  return _.assign({ currentUser: data }, _.mapValues(
    _.mapKeys(repositories, _.rearg(_.camelCase, 1)),
    repository => repository.create(fetchApi)
  ));
};

const signIn = async (url, attributes) => {
  const fetchApi = BaseApi.create(url.trim());
  let { status, data, errors } = await fetchApi.post('/auth/sign_in', attributes);

  if (_.has(errors, 'full_messages')) {
    errors = errors.full_messages;
  }

  if (status === 'error' || _.some(errors)) {
    throw new Error(_(errors).uniq().join('\n'));
  }

  return _.assign({ currentUser: data }, _.mapValues(
    _.mapKeys(repositories, _.rearg(_.camelCase, 1)),
    repository => repository.create(fetchApi)
  ));
}

export default { signUp, signIn };