var request = require('curlrequest');
var urlencode = require('urlencode');

var token = require('./token.js');
var url_encoded_token = urlencode(token.Token);


var options = {
  url: 'https://bulksell.ebay.com/ws/eBayISAPI.dll?FileExchangeProgrammaticDownload',
  headers: {
    'User-Agent': 'request',
    'Connection': 'Keep-Alive',
    'RefId': process.argv[2],
    'token': url_encoded_token
    
  }
};
request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
});
