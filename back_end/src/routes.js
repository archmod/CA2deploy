const express = require('express');
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "ASIAZDI3DZU6AUJQAJ45",
  secretAccessKey: "YbBimQ75k49YvsfuudbcnmKUjD+flYIhK20Hed3a"
});

var dynamodb = new AWS.DynamoDB();

const router = express.Router();

// retrieve latest micro-posts
router.get('/', async (req, res) => {
  var params = {
    TableName : "covid_analyzed_data",
    KeySchema: [
        { AttributeName: "region", KeyType: "HASH"},  //Partition key
        { AttributeName: "date", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "region", AttributeType: "S" },
        { AttributeName: "date", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
  };
  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
  });
});

// insert a new micro-post
router.post('/', async (req, res) => {

});

module.exports = router;
