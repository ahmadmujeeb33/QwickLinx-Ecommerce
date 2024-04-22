const mongoose = require('mongoose');

const { Schema } = mongoose;

const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
  id: { 
    type: String, 
    default: uuidv4,
    required: true,
    unique: true 
  },

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