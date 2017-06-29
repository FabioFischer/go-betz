const state = {
  isAuthenticated: false
};

const login = (email, password) => {
  return new Promise(resolve => {
    const services = {
      currentUser: { isAuthenticated: true }
    };

    resolve({ services })
  });
};


const auth = {
  isAuthenticated: () => state.isAuthenticated,

  login,

  register: () => state.isAuthenticated = true
};

export default auth;