import React, { useState, useEffect } from "react"
// import styled from 'styled-components'
import { useParams } from "react-router-dom";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    console.log(params);
    
    const getCuisine = async(name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
            );

        const recipes = await data.json();
        setCuisine(recipes.results)
    };
    

    useEffect(() =>{
        console.log(params.type);
    }, [params.type]);
    
    
    return (
       <div>
           <h2> THis is the italian</h2>
       </div>
    )
};

export default Cuisine;