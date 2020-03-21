import axios from 'axios';

export default class NpmStats {

  static getAll (username, from, until) {
    let url = `https://npm-stat.com/api/download-counts?author=${username}&from=${from}&until=${until}`;
    return axios.get(url)
      .then(resp => {
        resp = resp.data;

        return Object.keys(resp).map(o => {
          return { o, sum: Object.values(resp[o]).reduce((a, c) => a + c, 0) }
        });
      });
  }

  static getOne (username, from, until) {
    let url = `https://npm-stat.com/api/download-counts?author=${username}&from=${from}&until=${until}`;
    return axios.get(url)
      .then(resp => {
        resp = resp.data;

        return Object.keys(resp).map(o => {
          return { o, sum: Object.values(resp[o]).reduce((a, c) => a + c, 0) }
        });
      });
  }

  static getOnlyTotal (username, from, until) {

  }

}