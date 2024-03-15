import axios from 'axios'
import Auth from '../../../utils/auth';


export const useCreateUser = (setError)=>{
    const onSubmit = async(data) =>{
        try {
            const userData = await axios.post("/api/users/register",data)
            Auth.login(userData.data.token)
            setError('')    

        }
        catch (error) {
            setError('Please make sure all fields are unique')    
        }

    }

    return { onSubmit };

}