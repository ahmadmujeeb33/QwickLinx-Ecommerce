import axios from 'axios'
import Auth from '../../../utils/auth';


export const useCreateUser = (setError)=>{
    const onSubmit = async(data) =>{
        try {
            const userData = await axios.post("/api/users/register",data)
            Auth.login(userData.data.token, userData.data.id)
            setError('')    

        }
        catch (error) {
            setError('User already exists with this email ')    
        }

    }

    return { onSubmit };

}