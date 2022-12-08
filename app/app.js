"user strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

const accessLogStream = require("./src/config/log");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들 웨어
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan("dev"));
//app.use(morgan("common", { stream: accessLogStream })); morgan 로그
app.use(morgan("tiny", { stream: logger.stream })); // morgan내용으로 winston 로그 저장

app.use("/", home);

module.exports = app;