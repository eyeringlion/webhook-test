// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module['exports'] = function helloWorld (hook) {
  var proxy = "https://cors-anywhere.herokuapp.com/";
  var url = "https://locations-api.wework.com/api/v1/geogroupings/new-york-city--NY";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = myfunction;

  // xmlhttp.open("GET", url, true);
  xmlhttp.open("GET", proxy + url);
  // xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");

  xmlhttp.send(null);
  // hook.res.json({});


  function myfunction() {
    if (xmlhttp.readyState == 4) {
      // var json = JSON.parse(xmlhttp.responseText);
      hook.res.json({text: xmlhttp.responseText});
    }
  }
}
