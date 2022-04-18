import React from 'react'

import { useEffect, useState } from "react"
import {Wrapper, Card, Gradient } from './Popular'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"


export function Veggie(props) {
    const [veggie, setVeggie] = useState([])

  useEffect(() => {
    getVeggie();
  }, [])
  

  const getVeggie = async() => {

    const check = localStorage.getItem('popular')

    if (check){
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
   
    const data = await api.json();
    
    localStorage.setItem("popular", JSON.stringify(data.recipes));
    setVeggie(data.recipes);
    console.log(data.recipes);
  }
  }
    return (
    <div>
      <Wrapper>
        <h3> Veggie Picks</h3>
          <Splide 
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem"
          }}
          >
            {veggie.map((recipes) => {
              return (
               <SplideSlide key={recipes.id}>
                 <Card >
                  <p>  {recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title}/>
                  <Gradient />
                </Card>
              </SplideSlide>
                     );
               })}
           </Splide>
       </Wrapper>
    </div>
    )
}
