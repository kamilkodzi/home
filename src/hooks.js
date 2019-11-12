import {useState,useEffect} from 'react';

export const useFetch = (url,initialValue) => {
    const [result,setResult]=useState(initialValue);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(json=>setResult(json));
     },[url]);

     return result;
}

export const useDynamicTransition = ({increment,delay,length}) =>{
    const[index,setIndex]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
           setIndex(storedIndex=>{
                return (storedIndex+increment)%length;
            })
        },delay);
        return ()=>clearInterval(interval);
    },[delay,increment,length])

    return index;
}