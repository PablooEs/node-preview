const express = require("express");
const path = require("path");

//Routes
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());

const PORT = 4000;

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("App listening at port 4000");
});
