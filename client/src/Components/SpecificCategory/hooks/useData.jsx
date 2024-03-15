import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = ( id ) => {

    const [data, setData] = useState([])

    console.log("props", id)

    useEffect(() => {
        const grabCategoriesData = async () => {
            console.log("id", id)
            const categoriesData = await axios.get(`/api/categories/${id}`)
            console.log("categoriesData", categoriesData)
            setData(categoriesData.data)
        }
        grabCategoriesData()
    }, []);

    return { data }


}