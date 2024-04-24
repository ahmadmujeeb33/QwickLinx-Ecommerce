import axios from 'axios'
import Auth from '../../../utils/auth';


export const useLoginUser = (setError)=>{

    console.log("in login")

    const onSubmit = async(data) =>{
        console.log("data", data)
        try {
            const userData = await axios.post("/api/users/login",data)
            console.log("userData", userData.data.user[0].id)
            Auth.login(userData.data.token, userData.data.user[0].id)
            setError('')    
        }
        catch (error) {
            setError('Incorrect username or password ')    
        }

    }

    return { onSubmit };

}