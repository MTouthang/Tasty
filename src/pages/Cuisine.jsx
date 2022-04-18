import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    console.log("useParams: ", params);
    
    const getCuisine = async(name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
            );

        const recipes = await data.json();
        setCuisine(recipes.results)
    };
    

    useEffect(() =>{
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type])
    
    
    return (
       <div>
           
       </div>
    )
};

export default Cuisine;