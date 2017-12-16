const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  room: String,
  text: String,
  username: String
});

module.exports = mongoose.model("chat" , chatSchema )