import { useEffect, useState } from 'react';
import axios from 'axios'


export const useData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        grabCartData()
    }, []);

    const grabCartData = async () => {
        const userId = localStorage.getItem("id")
        const productsData =  await axios.get(`/api/users/${userId}/cart`)
        setData(productsData.data)
    }

    const removeFromCart = async (productId) => {
        const userId = localStorage.getItem("id")
        await axios.delete(`/api/users/${userId}/cart/${productId}`)
        grabCartData()
    }

    const removeAllFromCart = async() => {
        const userId = localStorage.getItem("id")
        await axios.delete(`/api/users/${userId}/cart`)
        setData([])
    }

    return { data, removeFromCart, removeAllFromCart }
}