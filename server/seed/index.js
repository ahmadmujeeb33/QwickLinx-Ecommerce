
const db = require('../config');

const { User, Product, Category} = require('../models');

const categories = require('./categories.json');
const products = require('./products.json')
const users = require('./users.json')



db.once('open', async () => {

    await Promise.all(users.map(async(user) => {
        return await User.create({
            "userName": user.userName,
            "password": user.password,
            "email": user.email,
        })
    }))

    let productIndex = -4

    const productData = await Promise.all(products.map(async(product) => {
        return await Product.create({
            "name": product.title,
            "image": product.image,
            "price": product.price,
            "description": product.description
        })
    }))

    await Promise.all(categories.map(async(category) => {
        console.log("productIndex", productIndex)
        productIndex+=4
        console.log("category", category)
        await Category.create({
            "name": category.title,
            "image": category.image,
            "products": [productData[productIndex]._id,productData[productIndex+1]._id,productData[productIndex+2]._id,productData[productIndex+3]._id]
        })
   }))

  process.exit();
});

