

import { useParams } from 'react-router-dom';
import { useData } from './hooks/useData';
import { Link } from "react-router-dom"




export const SpecificCategory = () => {


    let { id } = useParams();

    const products = useData(id)

    console.log("products", products)

    return (
        <>
        
        <div class="flex flex-wrap w-3/5  gap-5 justify-center md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto">
    {products.data.length > 0 && products.data.map((product, index) => (
        <div key={index} class="flex flex-wrap w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
                <img class="rounded-t-lg" src={product.image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

            <div class="w-full">
                <Link to={`/categories`}>
                    <div class="flex justify-center items-center pb-4">
                        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            View More Details
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    ))}
</div>



        </>
    )
}