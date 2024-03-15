
import sports from '../../public/Sports.jpg'
// import electronics from '../../public/electronics.PNG'
// import clothes from '../../public/clothes.png'
// import movies from '../../public/movies.jpg'
// import beauty from '../../public/beauty.jpg'
// import pets from '../../public/pets.PNG'

import { useData } from './hooks/useData';




export const Categories = () => {

    const allCategories = useData()

    console.log("allCategories", allCategories)

    return (
        <>
            <div class="flex flex-wrap gap-5 justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
                {allCategories.data.length > 0 && allCategories.data.map((category) => (
                    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {<div class="w-48 md:w-72 mx-auto pt-4">
                            <a href="#">
                                <img class="block mx-auto max-w-full rounded-t-lg md:rounded-none" src='../../public/Sports.jpg' alt="" />
                            </a>
                        </div> 
                        // console.log("category", category.image)
                        }

                        <div class="flex-grow p-5 text-center">
                            <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
                            </a>
                        </div>`
                    </div>
         ))}
            </div>

        </>
    )
}