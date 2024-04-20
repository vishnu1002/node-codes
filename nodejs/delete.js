const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb://localhost:27017");

//Delete One field
client.db("MCA").collection("students").deleteOne({name:"Apple"})

//Delete Many field
//client.db("MCA").collection("students").deleteMany({name:"apple"})

.then((res) => {
    console.log(res);
    client.close;
});