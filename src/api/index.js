import axios from 'axios';
import 'url-search-params-polyfill';
import { store } from '../store'

// HTTP Request & Response defalut setup
const config = {
  baseURL: 'https://api.hnpwa.com/v0/',
  timeout: 5000,
  // headers: {
  //     Authorization: 'asfadf',
  // }
};
const config2 = {
  baseURL: 'http://localhost/v0',
  timeout: 5000,
  // headers: {
  //     Authorization: 'asfadf',
  // }
};

// Create of instance funcion
const createInstance = config => axios.create({ ...config });

// Call to instance function in variable
const vue_news = createInstance(config);

const board = createInstance(config2);

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

// Add a request interceptor
board.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.Authorization = store.state.accessToken;
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
board.interceptors.response.use(
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

const getAccessToken = async payload => {
  try {
    const url = `/account/getAccessToken?user_id=${payload.user_id}&user_pwd=${payload.user_pwd}&client_id=${payload.client_id}`;
    return await board.get(url);
  } catch (error) {
    console.log(error);
  }
}

const getBoardList = async payload => {
  try {
    const url = `/board/list?boardList=${payload}`;
    return await board.get(url);
  } catch (error) {
    console.log(error);
  }
}

const deleteBoardOne = async id => {
  try {
    const url = `/board/delete?id=${id}`
    return await board.delete(url);
  } catch (error) {
    console.log(error);
  }
}

const addBoardOne = async payload => {
  try {
    let params = new URLSearchParams();
    params.append('title', payload.title);
    params.append('user', payload.user);
    params.append('content', payload.content);
    const url = `/board/add`;
    return await board.post(url, params);
  } catch (error) {
    console.log(error);
  }
}


const putBoardOne = async payload => {
  try {
    let params = new URLSearchParams();
    params.append('id', payload.id);
    params.append('title', payload.title);
    params.append('user', payload.user);
    params.append('content', payload.content);
    const url = `/board/put`;
    return await board.post(url, params);
  } catch (error) {
    console.log(error);
  }
}

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
export {
  fetchList,
  fetchUser,
  fetchItem,
  getAccessToken,
  getBoardList,
  deleteBoardOne,
  addBoardOne,
  putBoardOne
};
