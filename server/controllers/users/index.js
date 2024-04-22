const router = require('express').Router();
const { addUser } = require('../../services/users');


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

router.get('/login', async(req, res) => {

    const userName = req.body.userName
    const password = req.body.password

    try {
        const userData = await addUser(userName, password);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
