import axios from 'axios';

// HTTP Request & Response defalut setup
const config = {
  baseURL: 'https://api.hnpwa.com/v0/',
  timeout: 5000,
  // headers: {
  //     Authorization: 'asfadf',
  // }
};

// Create of instance funcion
const createInstance = config => axios.create({ ...config });

// Call to instance function in variable
const vue_news = createInstance(config);

// Add a request interceptor
vue_news.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log(config);
    // config.headers.Authorization = store.state.token;
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
vue_news.interceptors.response.use(
  response => {
    // Do something with response data
    // console.log(response);
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

// API Function setup
const fetchUser = async userId => {
  try {
    return await vue_news.get(`user/${userId}.json`);
  } catch (error) {
    console.log(error);
  }
};

const fetchItem = async itemId => {
  try {
    return await vue_news.get(`item/${itemId}.json`);
  } catch (error) {
    console.log(error);
  }
};

const fetchList = async pageName => {
  try {
    return await vue_news.get(`${pageName}/1.json`)
  } catch (error) {
    console.log(error);
  }
};

// Export API Function
export { fetchList, fetchUser, fetchItem };
