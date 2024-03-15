import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const grabCategoriesData = async () => {
            const categoriesData = await axios.get('/api/categories')
            console.log("categoriesData", categoriesData)
            setData(categoriesData.data)
        }
        grabCategoriesData()
    }, []);

    return { data }
}