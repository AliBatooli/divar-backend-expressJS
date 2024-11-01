const { Router } = require("express");
const { authRouter } = require("./modules/authenticate/auth.routes");

const mainRouter = Router();
//console.log(authRouter);

mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
