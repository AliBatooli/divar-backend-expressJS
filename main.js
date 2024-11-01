const express = require("express");
const env = require("dotenv");
const swaggerConfig = require("./Src/config/swagger.config");
const mainRouter = require("./Src/app.routes");
const NotFoundHandler = require("./Src/common/exeption/notfound.handler");
const AllExeptionHandler = require("./Src/common/exeption/all-exeption.handler");
env.config();
async function main() {
  const app = express();
  const PORT = process.env.PORT;
  require("./Src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  swaggerConfig(app);
  NotFoundHandler(app);
  AllExeptionHandler(app);
  app.use(mainRouter);
  app.listen(PORT, () => {
    console.log("server runned 3000");
  });
}
main();
