/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1650933353619_9722';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/example', 
      options: { useUnifiedTopology: true },   
    }, 
  };
   
  // exports.mongo = {
  //   client: {
  //     host: '127.0.0.1',
  //     port: '27017',
  //     name: 'example',
  //     user: '',
  //     password: '',
  //     options: {},
  //   },
  // };

  return {
    ...config,
    ...userConfig,
  };
};

