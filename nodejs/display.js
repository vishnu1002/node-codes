const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb://localhost:27017");

client.db("MCA").collection("students").findOne({name: "Sam"})

.then((res) => {
    console.log(res);
    client.close;
});