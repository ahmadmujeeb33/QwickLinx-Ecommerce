const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const { Schema } = mongoose;

const productSchema = new Schema({
  id: { 
    type: String, 
    default: uuidv4,
    required: true,
    unique: true 
  },

  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
    unique: true,
  }

});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;