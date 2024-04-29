const { User } = require('../../models');
const {signToken} = require('../../utils/auth')
const { v4: uuidv4 } = require('uuid');





const addUser = async(userName,email, password ) =>{
    const user = await User.create({id:uuidv4,userName, email, password });  
    const token = signToken(user);
    
    return {user,token}
}

const loginUser = async(userName, password) =>{

    const user = await User.find({userName, password})
    const token = signToken(user);

    console.log("user", user)

    if(!user.length){
        throw new Error('No users found');
    }

    return {user, token}
}


const addToCart = async(userId,productId) =>{
    const user = await User.findOneAndUpdate({id:userId},  { $push: { carts:productId } })  
    return "success"
}


const removeFromCart = async(userId,productId) =>{
    const user = await User.findOneAndUpdate({id:userId},  { $pull: { carts:productId } })
    return user
}

const getCart = async(userId) =>{
    const user = await User.find({id:userId}).populate('carts')
    return user
}

const removeAllFromCart = async(userId) => {
    const user = await User.updateOne({id:userId},{ $set: { carts: [] } })
    return user
}



module.exports =  {
    addUser,
    loginUser,
    addToCart,
    removeFromCart,
    getCart,
    removeAllFromCart
}
