
import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = ( val ) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const grabProductsData = async () => {
            console.log("val", val)
            const productData = await axios.get(`/api/products/search`, {
                params: {
                    title: val
                }
            })
            setData(productData.data)
        }
        grabProductsData()
    }, [val]);

    return { data }
}