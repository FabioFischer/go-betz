import { isNumber } from 'lodash';

const create = (route, modelName) => ({
  create(apiBase) {
    const api = apiBase.withRoute(route);

    const all = async (filters = {}) => await api.get('/', filters);
    const find = async id => await api.get(`/${id}`);
    const save = async model => {
      if (isNumber(model.id)) {
        return await api.put(`/${model.id}`, {
          [modelName]: model
        });
      }

      return await api.post('/', {
        [modelName]: model
      });
    };

    const destroy = async model => await api.destroy(`/${model.id}`);

    return { all, find, save, destroy };
  }
});

export default { create };