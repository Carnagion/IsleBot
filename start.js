const environment = require("dotenv");

const { login } = require("./utility/login.js");
const { upload } = require("./utility/upload.js");
const { listen } = require("./utility/listen.js");
const { intercept } = require("./utility/intercept.js");

environment.config();

login();
upload();
listen();
intercept();
