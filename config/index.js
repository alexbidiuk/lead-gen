const _ = require('lodash');

const initConfig = () => {
// module variables
  const config = require('./config.js');
  const defaultConfig = config.development;
  const environment = process.env.NODE_ENV || 'development';
  const environmentConfig = config[environment];
  const finalConfig = _.merge(defaultConfig, environmentConfig);
  global.gConfig = finalConfig;
};

module.exports = initConfig;

