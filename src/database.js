import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/recetas' // BD - Local
const url = 'mongodb+srv://nunicho:qzmp678@cluster0.phuqwn3.mongodb.net/recetasonline'

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})