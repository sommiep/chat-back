const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName:  String,
  password: String,
  firstName:  String,
  lastName: String,
  DOB:  Date,
  phone: Number,
  email:  String,
  status: Number,
  
});

module.exports = mongoose.model("user" , userSchema )