const defaultOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }, 
};

const endpoints = {
  getProducts: {
    ...defaultOptions,
    url: "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog",
  },
};

export default endpoints;