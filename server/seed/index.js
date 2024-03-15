
const db = require('../config');

const { User, Product, Category} = require('../models');

const categories = require('./categories.json');



db.once('open', async () => {

   await User.create({
        userName: 'Pamela',
        email: 'pamela@testmail.com',
        password: 'password12345',
   });


    await Promise.all(categories.map(async(category) => {
        await Category.create({
            "name": category.title,
            "image": category.image
        })
   }))

  process.exit();
});

