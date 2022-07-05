'use strict';

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/example', (...e) => {
//   console.log(e);
// });
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/user', controller.user.index);


  router.get('/user/add', controller.user.addUser);
  router.get('/user/edit', controller.user.editUser);
  router.get('/user/remove', controller.user.removeUser);

  router.get('/news', controller.news.index);


};
