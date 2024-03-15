const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    unique: true,
  },

  image: {
    type: String,
    required: true,
    unique: true,
  }

});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;