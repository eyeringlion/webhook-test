// A simple hello world microservice 
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module['exports'] = function helloWorld (hook) {
  console.log("req", hook.req.headers)
  var proxy = "https://cors-anywhere.herokuapp.com/";
  var url = "https://locations-api.wework.com/api/v1/geogroupings/new-york-city--NY";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = myfunction;
  xmlhttp.open("GET", url);
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // xmlhttp.withCredentials = true; 
  xmlhttp.setRequestHeader("Content-Type", "application/xhtml+xml");
  xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  // xmlhttp.setRequestHeader("Access-Control-Allow-Origin", hook.req.headers.origin);
  // xmlhttp.setRequestHeader("Access-Control-Allow-Headers", hook.req.headers.origin);
  // xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");

  xmlhttp.send(null);
  // hook.res.json({});


  function myfunction() {
    if (xmlhttp.readyState == 4) {
      // var json = JSON.parse(xmlhttp.responseText);
      hook.res.json({text: xmlhttp.responseText});
    }
  }
}
