const router = require('express').Router();
const { getSpecificProduct } = require('../../services/products');




router.get('/:id', async(req, res) => {

    try{ 
        const id = req.params.id;
        console.log("id", id)
        const data = await getSpecificProduct(id);
        console.log("data", data)
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
