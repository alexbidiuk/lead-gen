let http = require('http');
const Promise = require('bluebird');
Promise.config({
  cancellation: true
});


http.createServer(() => {}).listen(process.env.PORT || 6000);
const startBot = require('./bot/index');
startBot();
