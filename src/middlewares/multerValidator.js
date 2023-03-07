const util = require("util");
const multer = require("multer");

let uploadFile = multer().single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
