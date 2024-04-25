import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        grabCartData()
    }, []);

    const grabCartData = async () => {
        console.log("in data")
        const userId = localStorage.getItem("id")
        const productsData =  await axios.get(`/api/users/${userId}/cart`)
        console.log("", productsData)
        setData(productsData.data)
    }

    const removeFromCart = async (productId) => {
        const userId = localStorage.getItem("id")
        console.log("userId", userId)
        console.log("productId", productId)
        await axios.delete(`/api/users/${userId}/cart/${productId}`)
        grabCartData()
    }

    return { data, removeFromCart }
}