import React from 'react'
import Home from './Home'
import {Route,  BrowserRouter as Router } from "react-router-dom"
import Cuisine from "./Cuisine"


function Pages() {
  return (
    <div>
      
       <Route path="/" exact component={Home}/>
       <Route path="/cuisine/:type"  exact component={Cuisine}/>
    </div>
    
  )
}

export default Pages