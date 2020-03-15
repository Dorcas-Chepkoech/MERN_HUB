const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express(); //cretes the server
const port = process.env.PORT || 5000;//cretes the port

app.use(cors());//middleware
app.use(express.json());//parse json

const uri = process.env.ATLAS_URI;//get from mongodb atlas
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
});

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
}); //starts the server