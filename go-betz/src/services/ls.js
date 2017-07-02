const ls = {
  get: key => JSON.parse(window.localStorage.getItem(key)),

  save: (key, data) => window.localStorage.setItem(key, JSON.stringify(data)),

  remove: key => window.localStorage.removeItem(key),

  clear: () => window.localStorage.clear()
};

export default ls;