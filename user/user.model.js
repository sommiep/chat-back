const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:  String,
  password: String,
  status: Number  
});

module.exports = mongoose.model("user" , userSchema )