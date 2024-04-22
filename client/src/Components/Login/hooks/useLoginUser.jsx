import axios from 'axios'
import Auth from '../../../utils/auth';


export const useLoginUser = (setError)=>{
    const onSubmit = async(data) =>{
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