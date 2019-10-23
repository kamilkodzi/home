import React,{useEffect,useState} from 'react';

function Joke(){
 useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response=>response.json())
    .then(json=>console.log('joke json',json));
 });
 return(
    <div>
        <h3>Joke</h3>
    </div>
 )
}
 
export default Joke;