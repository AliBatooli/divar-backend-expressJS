const { authMessage } = require("./auth.messages");
const authService = require("./auth.service");
const autoBind = require("auto-bind");

class authController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  // ersale code yekbar masraf baraye login
  async sendOtp(req, res, next) {
    try {
      const { mobile } = req.body;

      await this.#service.sendOtp(mobile);
      return res.json({
        message: authMessage.sendOtpSuccess,
      });
    } catch (error) {
      next(error);
    }
  }
  // validation code yekbar masraf baraye vorod
  async checkOtp(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  // logOut
  async logOut(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new authController();
