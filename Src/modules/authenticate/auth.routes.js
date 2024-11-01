const { Router } = require("express");
const authController = require("./auth.controller");
const router = Router();

// async function sendOtp(req, res, next) {
//   try {
//     console.log("salaaam");
//     return res.json({
//       message: "salaaam",
//     });
//   } catch (error) {
//     next(error);
//   }
// }

router.post("/send-otp", authController.sendOtp);
// router.post("/send-otp", sendOtp);
router.post("/check-otp", authController.checkOtp);

module.exports = {
  authRouter: router,
};
