const { User } = require('../../models');
const {signToken} = require('../../utils/auth')



const addUser = async(userName, password, email) =>{
    const user = await User.create({ userName, email, password });  
    const token = signToken(user);
    
    return {user,token}
}

module.exports =  {
    addUser
}
