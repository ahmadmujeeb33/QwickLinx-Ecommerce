const { Category } = require('../../models');


const getAllCategories = () => {
    return Category.find({});
}

module.exports =  {
    getAllCategories
}