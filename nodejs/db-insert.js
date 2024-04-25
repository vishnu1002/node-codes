const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb://localhost:27017");

//Insert One
//client.db("MCA").collection("students").insertOne({name: "John", age: 34})

//Insert Many
client.db("MCA").collection("students").insertMany(
[
    {name: "John",age: 34},
    {name: "Sam", age: 12},
    {name: "Apple", age: 32}
])

.then((res) => {
    console.log(res);
    client.close;
});

