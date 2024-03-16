

const router = require('express').Router();
const { getAllCategories, getSpecificCategory } = require('../../services/categories');


router.get('/', async(req, res) => {
    
    try {
        const categoryData = await getAllCategories();
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async(req, res) => {

    const id = req.params.id
    
    try {
        const categoryData = await getSpecificCategory(id);
        console.log("categoryData",categoryData)
        res.status(200).json(categoryData);
    } catch (err) {
        console.log("error",err)
        res.status(500).json(err);
    }
})

module.exports = router;
