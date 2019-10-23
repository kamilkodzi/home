import React,{useEffect,useState} from 'react';

conts useFetch = (url,initialValue) => {
    const [result,setResult]=useState(initialValue);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(json=>setResult(json));
     },[]);

     return result;
};


function Joke(){
    const {setup,punchline}=useFetch('https://official-joke-api.appspot.com/jokes/random',{});


 return(
    <div>
        <h3>Joke of the session</h3>
        <p>{setup}</p>
        <p><em>{punchline}</em></p>
    </div>
 )
}
 
export default Joke;