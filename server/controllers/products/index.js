const router = require('express').Router();
const { getSpecificProduct, getFilteredProducts } = require('../../services/products');




router.get('/search', async(req, res) => {

    console.log("in search")

    console.log("req.params", req.query)

    const search = req.query.title

    try{ 
        const data = await getFilteredProducts(search);
        console.log("data", data)
        res.status(200).json(data);
    } catch (err) {
        console.log("err", err)
        res.status(500).json(err);
    }
})

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
