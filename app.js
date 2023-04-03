const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/users");

dotenv.config({});

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("DB connection success");
  });

app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
