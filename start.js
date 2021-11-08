const environment = require("dotenv");

const { login } = require("./utility/login.js");
const { upload } = require("./utility/upload.js");
const { listen } = require("./utility/listen.js");

environment.config();

login();
upload();
listen();