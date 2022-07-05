'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {


    const userList = await this.service.user.getUserList();
    console.log(userList);


    this.ctx.body = '我是用户页面';

  }

  async addUser() {
    // 增加数据

    const user = new this.ctx.model.User({
    OrderNumber: '00002',
    FullName: '黄剑',
    PassportNo: '亿万富翁',
    DepartureFlightNumber: '12fgeewr56',
    TimeOfEntry: '12fwgre3g6',
    ArriveAtTheAirport: '123eg456',
    FlightNumber: '1234efqw4g56',
    EnglishName: '1234efwgrq56',
    Gender: '1reqwr423456',
    DateOfBirth: '1egar23456',
    Nationality: '1feqweg23456',
    PassportIssueDate: '1efw23456',
    PassportPeriodOfValidity: '12gwege3456',
    DepartureDate: '1ewgh23456',
    DepartureCity: '12fwegf3456',
    Type: '1grre23456',
    Status: '12sdg3456',


    });

    const result = await user.save();
    console.log(result);


    this.ctx.body = '增加用户成功';

  }

  async editUser() {
    // 增加数据


    await this.ctx.model.User.updateOne({
      _id: '606bb26eb52dd110856856f1',
    }, {
      username: '哈哈哈',
      password: '1234',
    }, function(err, result) {

      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });

    this.ctx.body = '修改用户成功';

  }

  async removeUser() {
    // 增加数据

    const rel = await this.ctx.model.User.deleteOne({ _id: '606bb26eb52dd110856856f1' });

    cnsole.log(rel);

    this.ctx.body = '删除用户成功';

  }
}

module.exports = UserController;
