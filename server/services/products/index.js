const { Product } = require('../../models');


const getSpecificProduct = (id) => {
    return Product.findOne({id})
}

const getFilteredProducts = (search) => {

    const serachTerm = new RegExp(search, 'i');

    return Product.find({name:serachTerm})
}

module.exports =  {
    getSpecificProduct,
    getFilteredProducts
}