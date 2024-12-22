import React from "react";
import { useParams } from "react-router";


const Respository:React.FC = () =>
{
    const params = useParams();

    const repository = `${params['repository']}/${params['*']}`;
 

    return <h1>Respository:{repository}</h1>;
}

export default Respository;