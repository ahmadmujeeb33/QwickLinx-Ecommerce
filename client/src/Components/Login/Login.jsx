import './login.css';
import { useForm } from 'react-hook-form';
import { useLoginUser } from './hooks/useLoginUser';
import { useState } from 'react';


export const Login = () =>{

  const [error, setError] = useState('');
  const { onSubmit } = useLoginUser(setError);
  const { register, handleSubmit, formState: { errors }  } = useForm();


  return (
    <div className="login-container">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="userName" 
              type="text" 
              placeholder="Username" 
              {...register('userName', { required: true })} 
            />
            { errors.userName  && <p style={{ color: 'red' }}>{errors.userName.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="******************" 
              {...register('password', { required: true })} 
            />
            { errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Login
            </button>
          </div>
        <p style={{ color: 'red'}} className="pt-3.5">{error}</p>
        </form>
      </div>
    </div>
  );
}
