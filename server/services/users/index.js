const { User } = require('../../models');
const {signToken} = require('../../utils/auth')
const { v4: uuidv4 } = require('uuid');




const addUser = async(userName,email, password ) =>{
    const user = await User.create({id:uuidv4,userName, email, password });  
    const token = signToken(user);
    
    return {user,token}
}

const loginUser = async(userName, password) =>{

}

module.exports =  {
    addUser
}
