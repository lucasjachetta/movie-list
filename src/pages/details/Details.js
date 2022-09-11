import React from "react";
import { useParams } from "react-router-dom";


function Details(){

    
    const [id] = useParams() //utilizado para recuperar os params após : da url

    return(
        <h1>Página de Detalhes</h1>
    )
}



export default Details