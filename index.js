const Request = require('request');

const API_URL = 'https://fantasydata.com/rss/rotoworld/?format=json';

module.exports = {

  request() {
    return new Promise((resolve, reject) => {
      Request(API_URL, (error, response, body) => {
        if (error || response.statusCode !== 200) {
          reject(error);
          return;
        }
        resolve(body);
      });
    });
  },

  getKey(key, body) {
    let response = null;

    if (typeof key !== 'string') {
      throw new Error('key must be a string!');
    }

    try {
      response = JSON.parse(body);
    }
    catch (e) {
      throw e;
    }

    return response.map(obj => obj[key]);
  },

  getKeys(keys, body) {
    let response = null;

    if (!Array.isArray(keys)) {
      throw new Error('key must be an array!');
    }

    try {
      response = JSON.parse(body);
    }
    catch (e) {
      throw e;
    }

    return response.map(obj => {
      const newObj = {};

      for (let key in obj) {
        if (keys.includes(key)) {
          newObj[key] = obj[key];
        }
      }

      return newObj;
    });
  }
};
