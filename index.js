const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
const { noteRouter } = require("./routes/noteRoutes");
const { auth } = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use(auth);
app.use("/notes", noteRouter);

app.listen(process.env.port, async () => {
  try {
    const connect = await connection;
    console.log(connect.models.user);
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening to server at port ${process.env.port}`);
});
