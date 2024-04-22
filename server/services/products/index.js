const { Product } = require('../../models');


const getSpecificProduct = (id) => {
    return Product.findOne({id})
}

module.exports =  {
    getSpecificProduct,
}