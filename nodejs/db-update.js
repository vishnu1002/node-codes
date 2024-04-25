const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb://localhost:27017");

//Update One
//client.db("MCA").collection("students").updateOne({name: "John"}, {$set:{name:"Sam"}})

//Update Many
client.db("MCA").collection("students").updateMany({}, {$set:{fullTime:false}})

//Add field
//client.db("MCA").collection("students").updateOne({name: "Sam"}, {$set:{email:"sam@gmail.com"}})

.then((res) => {
    console.log(res);
    client.close;
});