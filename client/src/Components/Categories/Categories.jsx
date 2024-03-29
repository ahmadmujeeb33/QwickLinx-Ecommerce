
import { useData } from './hooks/useData';
import { Link } from "react-router-dom"



export const Categories = () => {

    const allCategories = useData()



    return (
        <>
            <div class="flex flex-wrap gap-5 justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
                {allCategories.data.length > 0 && allCategories.data.map((category) => (
                    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {<div class="w-48 md:w-72 mx-auto pt-4">
                            <a href="#">
                                <img class="block mx-auto max-w-full rounded-t-lg md:rounded-none" src={category.image} alt="" />
                            </a>
                        </div> 
                        }

                        <div class="flex-grow p-5 text-center">
                            <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
                            </a>
                        </div>`
                        <Link to={`/categories/${category._id}`}>
                            <div class="flex justify-center items-center pb-4">
                                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    View Category
                                </button>
                            </div>
                        </Link>
                    </div>
                    
                ))}

               
            </div>

        </>
    )
}