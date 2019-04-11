var fetch = require('node-fetch');

module['exports'] = function helloWorld (hook) {
  var proxyurl = "https://cors-anywhere.herokuapp.com/";
  var url = "https://locations-api.wework.com/api/v1/geogroupings/new-york-city--NY"; // site that doesn’t send Access-Control-*
  fetch(proxyurl + url, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
    .then(res => res.text())
    .then(text => {
      hook.res.json({text: text})
    });
}
