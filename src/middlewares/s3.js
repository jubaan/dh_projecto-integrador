const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
};

exports.uploadFile = uploadFile;

const getFileStream = (fileKey) => {
  const downloadStream = {
    Key: fileKey,
    Bucket: bucketName,
  };
};

exports.getFileStream = getFileStream;