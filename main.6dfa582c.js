parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,c=!0,u=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==o.return||o.return()}finally{if(u)throw a}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var r="https://mate-academy.github.io/phone-catalogue-static/api/phones.json";function o(){return fetch(r).then(function(n){return n.json()}).catch(function(n){setTimeout(function(){return new Error(n)},5e3)})}function a(n){var t=[],e=[];n.forEach(function(n){e.push(n.name)}),n.forEach(function(n){t.push(n.id)}),c(t),u(e)}function c(t){var e,r=n(t);try{for(r.s();!(e=r.n()).done;){var o=e.value,a="https://mate-academy.github.io"+"/phone-catalogue-static/api/phones/".concat(o,".json");fetch(a).then(function(n){return n.json().then(function(n){return console.log(n)})}).catch(function(n){return n})}}catch(c){r.e(c)}finally{r.f()}}function u(n){var t=document.body,e=document.createElement("ul");n.forEach(function(n){var t=document.createElement("li");t.append(n),e.append(t)}),t.append(e)}o().then(function(n){a(n)}).catch(function(n){return n});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6dfa582c.js.map