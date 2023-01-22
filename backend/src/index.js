const cors=require("cors")
const express = require('express');
const cookies=require("cookie-parser")
const route = require('./router');
const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
const app=express()
require("dotenv").config()
app.use(express.json());

mongoose.connect("mongodb+srv://Jyoti273-db:djukOqR9QbI5Itvc@cluster0.nzuylps.mongodb.net/Project-3_Book-Management-db", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
app.use(cors())
app.use(cookies())
app.use('/', route);

app.listen(4000, function () {
    console.log('Express app running on port ' + (4000))
});