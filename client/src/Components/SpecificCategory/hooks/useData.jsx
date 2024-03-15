import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = ( {id} ) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const grabCategoriesData = async () => {
            const categoriesData = await axios.get(`/api/categories/${id}`)
            console.log("categoriesData", categoriesData)
            setData(categoriesData.data)
        }
        grabCategoriesData()
    }, []);

    return { data }


}