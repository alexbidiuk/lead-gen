const Promise = require('bluebird');
Promise.config({
  cancellation: true
});

const startBot = require('./bot/index');
startBot();
