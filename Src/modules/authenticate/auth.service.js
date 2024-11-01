const autoBind = require("auto-bind");
const userModel = require("../user/user.model");
const createHttpError = require("http-errors");
const { authMessage } = require("./auth.messages");
const { randomInt } = require("crypto");

class authService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = userModel;
  }
  // ersale code be mobile
  async sendOtp(mobile) {
    const user = await this.#model.findOne({ mobile });
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: now + 1000 * 60 * 2,
    };
    const now = new Date().getTime();
    if (!user) {
      const newUser = await this.#model.create({
        mobile,
        otp,
      });
      return newUser;
    }

    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(authMessage.otpCodeNotExpired);
    }

    user.otp = otp;
    await user.save();
    return user;
  }

  async checkOtp(mobile, code) {}

  async chechExistUserBYMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(authMessage.NotFound);
    return user;
  }
}

//export be ravesh singeltone
module.exports = new authService();
