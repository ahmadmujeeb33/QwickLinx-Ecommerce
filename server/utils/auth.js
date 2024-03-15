const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';


const signToken = (username, email, id) =>{
    const payload = { username, email, id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

module.exports = {
    signToken
}