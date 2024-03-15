const router = require('express').Router();
const { addUser } = require('../../services/users');


router.get('/', async(req, res) => {
    try {
        const userData = await addUser(userName, email, password);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
