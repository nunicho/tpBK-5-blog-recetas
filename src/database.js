import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/recetas'

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})