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
  },

  carts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],

});


const User = mongoose.model('User', userSchema);

module.exports = User;