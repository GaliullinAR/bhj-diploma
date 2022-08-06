/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const { url, data, method, callback } = options;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const formData = new FormData();
  
  try {
    if (method === "GET") {
      xhr.open(method, setFullURL(data, url));
      xhr.send();
    } else {
      formData.append(getKeys(data, data.mail), data.mail);
      formData.append(getKeys(data, data.password), data.password);

      xhr.send(formData);
    }
  } catch (err) {
    callback(err);
  }
  
  xhr.addEventListener('load', function () {
    callback(null, xhr.response);
  });
  
  
};

function setFullURL(data = {}, url) {
  let fullURL = url + '?';
  for (let key in data) {
    fullURL += `${key}=${data[key]}&`;
  }
  return fullURL.substring(0, fullURL.length - 1);
}

function getKeys(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}


createRequest({
  url: "https://example.com",
  data: {
    mail: 'galiullin',
    password: 'oneone'
  },
  method: "GET",
  callback: (err, response) => {
    console.log(err);
  }  
});