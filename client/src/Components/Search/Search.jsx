import {useState } from 'react';
import { useData } from './hooks/useData';
import { Link } from "react-router-dom"



export const Search =() => {

    const [inputVal, setInputVal] = useState('')

    const products = useData(inputVal);

    return (
        <div>
            <div class = "flex justify-center flex-col items-center">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                <input onChange = {(event) => setInputVal(event.target.value)} type="text" id="small-input" class="block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div class="flex flex-wrap w-3/5   gap-5 justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto">
                {products.data.length > 0 && products.data.map((product, index) => (
                    <div key={index} class=" flex flex-wrap w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 pt-5">
                        <div class="w-full flex justify-center"  >
                            <img src={product.image} alt="" style={{ width: '300px', height: '250px' }} />
                        </div>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>

                        <div class="w-full">
                            <Link to={`/products/${product.id}`}>
                                <div class="flex justify-center items-center pb-4">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                        View More Details
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )

}