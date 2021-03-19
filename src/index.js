require("dotenv").config();
const express = require("express");
const path = require("path");

//Routes
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
