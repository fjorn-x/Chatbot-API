const express = require("express");
const sequelize = require("./config/database");
const userRouter = require("./routes/users");
const chatbotRouter = require("./routes/chatbots");
const conversationsRouter = require("./routes/conversations");
const endusersRouter = require("./routes/endusers");

sequelize.sync().then(() => console.log("db is ready"));

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/chatbots", chatbotRouter);
app.use("/conversations", conversationsRouter);
app.use("/endusers", endusersRouter);

app.listen(3001, () => {
  console.log("app is running");
});
