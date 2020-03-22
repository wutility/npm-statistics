import axios from 'axios';

let BASE_URL = 'https://npm-stat.com/api/download-counts';

let date = new Date();
let endDate = date.toISOString().slice(0, 10);

date.setFullYear(date.getFullYear() - 1);
let startDate = date.toISOString().slice(0, 10);

let defaultParams = {
  username: '', // required
  until: endDate,
  from: startDate,
  exclude: []
};

/**
 * 
 * @param {string} username 'haikel'
 * @param {string} from '2018-02-05'
 * @param {string} until '2020-03-21'
 * @param {Array} exclude ['xtra-fs']
 */
export function getAll (uoptions) {

  let options = { ...defaultParams, ...uoptions };

  let { username, from, until, exclude } = options;

  let url = `${BASE_URL}?author=${username}&from=${from}&until=${until}`;

  return axios.get(url)
    .then(resp => {

      resp = resp.data;

      let downloadsPerPackage = [];

      Object.keys(resp).forEach(o => {
        if (!exclude.includes(o)) {
          let downloads = Object.values(resp[o]).reduce((a, c) => a + c, 0);
          downloadsPerPackage.push({ name: o, downloads });
        }
      });

      let total = downloadsPerPackage.reduce((a, c) => a + c.downloads, 0);

      let stats = {
        packages: downloadsPerPackage,
        total
      };

      return stats;
    });
}

export function getOne (packagename, from, until) {

  if (!from) { from = startDate; }
  if (!until) { until = endDate; }

  let url = `${BASE_URL}?package=${packagename}&from=${from}&until=${until}`;
  return axios.get(url)
    .then(resp => {
      resp = resp.data;
      let downloads = Object.values(resp[packagename]).reduce((a, c) => a + c, 0);
      return { package: packagename, downloads }
    });
}