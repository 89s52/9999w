'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

//启用 egg-mongoose 插件
// exports.mongoose = {
//   enable: true, 
//   package: 'egg-mongoose', 
// };

exports.mongo = {
  enable: true,
  package: 'egg-mongo-native',
};