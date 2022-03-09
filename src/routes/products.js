var express = require("express");
var router = express.Router();
const multer = require("multer");
const productsController = require("../controllers/productsController");
const { uploadFile, getFileStream } = require("../middlewares/s3.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

router.get("/", productsController.list);

let upload = multer({ storage });
router.post(
  "/upload",
  upload.single("productImage"),
  async (req, res) => {
    const file = req.file;
    const restul = await uploadFile(file);
    await unlinkFile(file.path);
    res.send({ imagePath: `/upload/${result.key}` });
  },
  productsController.upload
);

module.exports = router;
