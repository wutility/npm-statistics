!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],t):t((e=e||self).NpmStats={},e.axios)}(this,(function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;let n="https://npm-stat.com/api/download-counts",o=new Date,l=o.toISOString().slice(0,10);o.setFullYear(o.getFullYear()-1);let a=o.toISOString().slice(0,10),u={username:"",until:l,from:a,exclude:[]};e.getAll=function(e){let o={...u,...e},{username:l,from:a,until:r,exclude:s}=o,c=`${n}?author=${l}&from=${a}&until=${r}`;return t.get(c).then(e=>{e=e.data;let t=[];Object.keys(e).forEach(n=>{if(!s.includes(n)){let o=Object.values(e[n]).reduce((e,t)=>e+t,0);t.push({name:n,downloads:o})}});let n=t.reduce((e,t)=>e+t.downloads,0);return{packages:t,total:n}})},e.getOne=function(e,o,u){o||(o=a),u||(u=l);let r=`${n}?package=${e}&from=${o}&until=${u}`;return t.get(r).then(t=>{t=t.data;let n=Object.values(t[e]).reduce((e,t)=>e+t,0);return{package:e,downloads:n}})},Object.defineProperty(e,"__esModule",{value:!0})}));