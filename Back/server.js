const express = require("express");
const cors = require("cors");
const db = require("./models");
const port = 7000;
const app = express();
const userRoute = require("./routes/userRoute");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
