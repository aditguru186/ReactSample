var express = require("express");
var app = express();
var path = require("path");
var fetchProductsRouter = require("./routes/products");
const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.use(cors());
// app.options("*", cors());
app.use("/", fetchProductsRouter);

app.listen(8080);

module.exports = app;
