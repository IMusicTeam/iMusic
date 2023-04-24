const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRouter = require('./src/routers/musicRouter');

const app = express();  

// mongoose.connect('mongodb://localhost/Homepage', { useNewUrlParser: true });
const uri='mongodb+srv://shahul0100:jG6lG7pRBLhhhUSA@cluster0.zjaigre.mongodb.net/iMusic?retryWrites=true&w=majority'

app.use(cors());
app.use(express.json({ limit: '50mb' }));

//Mongodb connection
async function connect (){
    try{
        await mongoose.connect(uri)
        console.log("connect to the mongodb")
    }catch(err){
        console.log(err.message)
    }
}
connect()

app.use("/", userRouter);


app.listen(6000);
