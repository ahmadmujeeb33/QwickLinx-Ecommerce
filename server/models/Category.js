const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const { Schema } = mongoose;

const categorySchema = new Schema({
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
  image: {
    type: String,
    required: true,
    unique: true,
  },

  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],

});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;