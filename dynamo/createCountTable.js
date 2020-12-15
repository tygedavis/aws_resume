const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Count",
    KeySchema: [
        { AttributeName: "count", KeyType: "HASH"},  //Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "count", AttributeType: "N" },
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
