

import { useParams } from 'react-router-dom';
import { useData } from './hooks/useData';



export const SpecificCategory = () => {


    let { id } = useParams();

    console.log("myParam", id)

    const {data} = useData(id)

    return (
        <h1>Hello</h1>
    )



}