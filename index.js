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
    refId:process.argv[3]
};

request.post({url: options.url, form: idform}, function (error, response, body) {
  if (error) throw error;
  switch(process.argv[2]){
    case "sold":
      fs.writeFile('node_sold_ebay.csv', body, (err) => {
        if (err) throw err; 
        console.log("sold listings file saved....");      
      });
      break;
    case "unsold":
      fs.writeFile('node_unsold_ebay.csv', body, (err) => {
        if (err) throw err;
        console.log("unsold listings file saved....");
      });
      break;
    default:
      console.log("arguments not recognized");
      break;
  }
});
