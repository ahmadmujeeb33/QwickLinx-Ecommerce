const { Category } = require('../../models');


const getAllCategories = () => {
    return Category.find({});
}

const getSpecificCategory = (id) => {
    return Category.findById(id).populate('products')
}

module.exports =  {
    getAllCategories,
    getSpecificCategory
}