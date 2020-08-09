import React from 'react';
 import {BrowserRouter as Router, Route }from "react-router-dom";

import PokeDetails from "./components/PokeDetails";
import {useSelector } from "react-redux";

import Header from "./components/Header";
// import PokemonList from "./components/PokemonList"

import { Suspense } from "react";
import {lazy} from "react";
// eslint-disable-next-line 
const PokemonList = lazy(()=> import("./components/PokemonList"));



  function App() {
    const theme = useSelector (state =>state.themems)
   return(
     
       
    <div style={theme}> 
      <Header   />
<Router>
 <Suspense fallback={<h3 style={{color:"white",display:"flex",justifyContent:"center"}}>Loading...</h3>}> 
<Route path="/pokedex" exact component={PokemonList} glbstyle={theme}  />
</Suspense>
<Route path="/Info/:id"component={PokeDetails} glbstyle={theme}  />

</Router>
    </div>
    
  );
}




export default App;
