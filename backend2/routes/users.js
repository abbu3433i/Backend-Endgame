//------installation----------
 // install mongodb
 // install mongoosejs
 // require and setup connection
 // make schema
 // create model and export




const mongoose = require("mongoose");


//node mongoose ke through connect ho
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");   //---ye database create karta he practicekaro naam se kiya he mene


const userschema  = mongoose.Schema({
  user : String,
  age : Number,             //------------ye batayega har document ka data kaisa hoga
  name : String 
})


module.exports = mongoose.model("user",userschema)   //-----ye collection bana ke dega "naam" ki jagah collections ke name aayege jitne banana ho humko