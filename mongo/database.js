const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test");

const conn = mongoose.connection;

conn.on('connected', () => console.log("Database connected!..."));
conn.on('disconnected', () => console.log("Database disconnected!..."));
conn.on("error", console.error.bind(console, 'Connection error'));

module.exports = conn;
