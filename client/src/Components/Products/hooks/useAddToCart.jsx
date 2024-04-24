
import { useEffect, useState } from 'react';
import axios from 'axios'


export const useAddToCart = ( ) => {

    const addToCart = async (productId) => {
        const userId = localStorage.getItem("id")
        console.log("userId", userId)
        console.log("productId", productId)
        await axios.post(`/api/users/${userId}/cart`, {productId})
    }

    return { addToCart }
}