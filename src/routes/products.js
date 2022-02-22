var express = require("express");
var router = express.Router();
const multer = require("multer");
// const multerS3 = require("multer-s3");
const productsController = require("../controllers/productsController");
// aws.config.update({
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   region: "us-east-1",
// });

// const s3 = new aws.S3({});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "dh-proyecto-integrador",
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: "public-read",
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

// router.get('/', productsController.list);
router.post("/upload", upload.single("productFile"), productsController.upload);

module.exports = router;
