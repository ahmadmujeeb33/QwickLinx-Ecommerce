

const router = require('express').Router();
const { getAllCategories } = require('../../services/categories');


router.get('/', async(req, res) => {
    
    try {
        const categoryData = await getAllCategories();
        console.log("categoryData", categoryData)
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
