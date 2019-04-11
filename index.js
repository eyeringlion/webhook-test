// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module['exports'] = function helloWorld (hook) {
  var url = "https://api.github.com/users/xiaotian/repos";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = myfunction;

  xmlhttp.open("GET", url, true);

  xmlhttp.send(null);
  // hook.res.json({});


  function myfunction() {
    if (xmlhttp.readyState == 4) {
      var json = JSON.parse(xmlhttp.responseText);
      hook.res.json(json);
    }
  }
}