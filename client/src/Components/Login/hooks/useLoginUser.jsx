import axios from 'axios'
import Auth from '../../../utils/auth';


export const useLoginUser = (setError)=>{

    console.log("in login")

    const onSubmit = async(data) =>{
        console.log("data", data)
        try {
            const userData = await axios.post("/api/users/login",data)
            Auth.login(userData.data.token)
            setError('')    
        }
        catch (error) {
            setError('Incorrect username or password ')    
        }

    }

    return { onSubmit };

}