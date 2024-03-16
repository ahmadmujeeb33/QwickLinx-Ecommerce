
const db = require('../config');

const { User, Product, Category} = require('../models');

const categories = require('./categories.json');
const products = require('./products.json')



db.once('open', async () => {

    let productIndex = 0

    const productData = await Promise.all(products.map(async(product) => {
        return await Product.create({
            "name": product.title,
            "image": product.image,
            "price": product.price,
            "description": product.description
        })
    }))

    await Promise.all(categories.map(async(category) => {
        await Category.create({
            "name": category.title,
            "image": category.image,
            "products": [productData[productIndex].id,productData[productIndex+1].id,productData[productIndex+2].id,productData[productIndex+3].id]
        })
        productIndex+=4

        console.log("productIndex", productData[productIndex])
   }))

  process.exit();
});

