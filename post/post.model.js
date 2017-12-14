const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  
  topic: String ,
  content: String,
  category: String,
  date: String,
  time: String
});

module.exports = mongoose.model("post" , postSchema )