var request = require('request');
var fs = require('fs');
var token = require('./token.js');



var options = {
  url: 'https://bulksell.ebay.com/ws/eBayISAPI.dll?FileExchangeProgrammaticDownload',
  headers: {
    'User-Agent': 'request',
    'Connection': 'Keep-Alive',  
  }
};
var idform = {
    token:token.Token,
    refId:process.argv[2]
};

request.post({url: options.url, form: idform}, function (error, response, body) {
  if (error) throw error;
    fs.writeFile('node_sold_ebay.csv', body, (err) => {
      if (err) throw err; 
      console.log("file saved....");
    });
});
