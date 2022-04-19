import React, { useState, useEffect } from "react"
import styled from "styled-components";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";


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
        getCuisine(params.type)
    }, [params.type]);
    
    return <Grid
        animate={{opacity:1}}
        initial={{opacity: 0}}
        exit={{duration: 0}}
        transition={{duration: 0.5}}
    >
           {cuisine.map((item) => {
               return (
                   <div key={item.id}>
                       <Card>
                       <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="" />
                            <h4> {item.title}</h4>
                        </Link>
                       </Card>
                   </div>
               )
           })}
       </Grid> 
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled(motion.div)`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;



export default Cuisine;