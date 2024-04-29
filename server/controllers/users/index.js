const router = require('express').Router();
const { addUser, loginUser, addToCart,removeFromCart,getCart, removeAllFromCart } = require('../../services/users');


router.post('/register', async(req, res) => {

    console.log("in register")

    const userName = req.body.userName
    const email = req.body.email
    const password = req.body.password

    console.log("req.body", req.body)
    

    try {
        const userData = await addUser(userName, email, password);
        res.status(200).json(userData);
    } catch (err) {
        console.log("err", err)
        res.status(500).json(err);
    }
})

router.post('/login', async(req, res) => {

    console.log("req.body.userName", req.body)

    const userName = req.body.userName
    const password = req.body.password

    try {
        const userData = await loginUser(userName, password);
        console.log("userData", userData)
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/:id/cart', async(req, res) => {


    const productId = req.body.productId
    const userId = req.params.id

    try {
        const userData = await addToCart(userId, productId);
        console.log("userData", userData)
        res.status(200).send("success");
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id/cart/:productId', async(req, res) => {

    const productId = req.params.productId
    const userId = req.params.id

    try {
        const userData = await removeFromCart(userId, productId);
        res.status(200).send("success");
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id/cart', async(req,res) => {
    const userId = req.params.id
    try {
        const userData = await getCart(userId);
        res.status(200).send(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id/cart', async(req, res) =>{
    const userId = req.params.id
    try {
        const userData = await removeAllFromCart(userId);
        res.status(200).send(userData);
    } catch (err) {
        res.status(500).json(err);
    }

})


module.exports = router;
