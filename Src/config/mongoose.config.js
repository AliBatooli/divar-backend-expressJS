const { default: mongoose } = require("mongoose");
const env = require("dotenv");
env.config();
mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("CONNECT TO DB");
  })
  .catch((err) => {
    console.log(err?.message ?? " faild connect to DB");
  });
