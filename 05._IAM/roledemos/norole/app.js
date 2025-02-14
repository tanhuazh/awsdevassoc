var AWS = require('aws-sdk');

// use environment variables
// aws_access_key_id
// aws_secret_access_key
// AWS.config.loadFromPath('./config.json');

var s3 = new AWS.S3({
  sslEnabled: false,
});

const BUCKET = "michael-roletest"
const KEY = "file.txt"

var params = {
  Bucket: BUCKET,
  Key: KEY
 };


function run() {
  console.log("Attempting to get " + params.Key + " from bucket: " + params.Bucket + "\n");

  s3.getObject(params, function(err, data) {
    if (err) {
      console.log("An error occurred:");
      console.log(err, err.stack); 
    } else {
      console.log("Success, file data:");
      console.log(data);
      console.log("\nFile contents:");
      console.log(data.Body.toString('utf8'));
    }
  });
}

run();
