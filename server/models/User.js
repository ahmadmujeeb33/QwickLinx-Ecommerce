const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    sparse:true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    sparse:true
  },
  password: {
    type: String,
    required: true,
    sparse:true,
    unique: true,

  },

});


const User = mongoose.model('User', userSchema);

module.exports = User;