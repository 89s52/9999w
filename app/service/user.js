

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList() {
    const a = await this.ctx.model.User.find({});
    console.log(a);
    // 查询user表的数据
    return a;

  }
}

module.exports = UserService;
