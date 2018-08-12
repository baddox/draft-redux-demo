const DELAY = 1500;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = url => {
  return sleep(DELAY).then(() => {
    return localStorage.getItem(url);
  });
};

const post = (url, data) => {
  return sleep(DELAY).then(() => {
    localStorage.setItem(url, data);
    return data;
  });
};

const api = {
  get,
  post,
};

export default api;
