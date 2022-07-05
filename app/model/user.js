module.exports = app => {

  const mongoose = app.mongoose; /* 引入建立连接的mongoose */
  const Schema = mongoose.Schema;


  // 数据库表的映射
  const UserSchema = new Schema({

    // 订单号
    OrderNumber: { type: String },
    // 姓名
    FullName: { type: String },
    // 护照号
    PassportNo: { type: String },
    // 出发航班号
    DepartureFlightNumber: { type: String },
    // 入境时间
    TimeOfEntry: { type: String },
    // 抵达机场
    ArriveAtTheAirport: { type: String },
    // 航班号
    FlightNumber: { type: String },
    // 英文名
    EnglishName: { type: String },
    // 性别
    Gender: { type: String },
    // 出生日期
    DateOfBirth: { type: String },
    // 国籍
    Nationality: { type: String },
    // 护照签发日期
    PassportIssueDate: { type: String },
    // 护照有效期
    PassportPeriodOfValidity: { type: String },
    // 离境日期
    DepartureDate: { type: String },
    // 出发城市
    DepartureCity: { type: String },
    // 批文类型
    Type: { type: String },
    // 批文的状态
    Status: { type: String },
    // Checked:{type:Boolean}

  });


  return mongoose.model('User', UserSchema, 'user');
};
