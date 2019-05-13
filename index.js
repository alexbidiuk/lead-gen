const Promise = require('bluebird');
const initConfig = require('./config');
const startBot = require('./bot');

Promise.config({
  cancellation: true
});
initConfig();
startBot();
