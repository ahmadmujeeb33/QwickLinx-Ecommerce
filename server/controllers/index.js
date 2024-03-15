const router = require('express').Router();


const userRoutes = require('./users');
const productRoutes = require('./products')
const categoryRoutes = require('./category')

router.use('/users', userRoutes);
router.use('/products', productRoutes)
router.use('/categories', categoryRoutes)


module.exports = router;