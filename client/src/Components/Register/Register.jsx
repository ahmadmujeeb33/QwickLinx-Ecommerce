import './register.css';
import { useForm } from 'react-hook-form';
import { useCreateUser } from './hooks/useCreateUser';
import { useState } from 'react';



export const Register = () =>{

    const [error, setError] = useState('');
    const { onSubmit } = useCreateUser(setError);
    const { register, handleSubmit, formState: { errors }  } = useForm();


    return (
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col ">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-start px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>   
                        <form onSubmit={handleSubmit(onSubmit)}>            
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4" 
                                placeholder="Email" 
                                {...register("email", { required: "This field is required" })}
                                />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                {...register("password", { required: "This field is required" })}
                                />
                            { errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                            <input 
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="userName"
                                placeholder="Username" 
                                {...register("userName", { required: "This field is required" })}
                            />
                            { errors.userName  && <p style={{ color: 'red' }}>{errors.userName.message}</p>}
                            <button
                                type="submit"
                                class="w-full text-center py-3 text-black hover:bg-green-dark focus:outline-none my-1"
                        >   Create Account</button>
                        </form>
                        <p style={{ color: 'red'}}>{error}</p>
                    </div>
                </div>
            </div>

        {console.log("error", error)}

        {/* {error!='' ?  <p>{error}</p> : null} */}

        </>

    )
  }