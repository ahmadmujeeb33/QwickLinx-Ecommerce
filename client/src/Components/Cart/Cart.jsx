
import { useData } from './hooks/useData';



export const Cart = () => {

    const {data, removeFromCart, removeAllFromCart} = useData();

    return (
        <div class = "mx-auto w-1/2">
            <div  class=" flex flex-wrap justify-center gap-10  h-full">

                {data.length > 0 && data[0].carts.map((product, index) => (
                    <div class=" flex bg-white border border-gray-200 rounded-lg shadow    ">

                        <div key={index}  class = "flex ">
                            
                            <div>
                                <img class="max-w-xs object-contain h-auto" src={product.image} style={{ width: '250px', height: '250px' }} />
                            </div>
                            <div>
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                                </div>

                                <div class="flex flex-wrap gap-8  items-center justify-between cursor-pointer pr-10">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <a  onClick={ () => removeFromCart(product._id)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-10 ">Remove from cart</a>
                                </div>
                            </div>

                        </div>
                    </div> 

                ))}

            </div>

            <div class="mt-10 text-center">

                <button onClick={ () => removeAllFromCart()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Checkout
                </button>

            </div>

        </div>
    )




}