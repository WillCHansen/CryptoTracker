var data = require('./data');

var Gdax = require('gdax');
var publicClient = new Gdax.PublicClient();

publicClient.productID = 'ETH-USD';


publicClient.getProductHistoricRates({'start': '2017-07-01T14:07:15-07:00', 'end': '2017-07-25T14:07:15-07:00', 'granularity': 86400}, function(err, response, data) {
    console.log(data)
});