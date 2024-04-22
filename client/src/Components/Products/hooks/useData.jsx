
import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = ( id ) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const grabCategoriesData = async () => {
            const productData = await axios.get(`/api/products/${id}`)
            console.log("pridtcData", productData)
            setData(productData.data)
        }
        grabCategoriesData()
    }, []);

    return { data }
}