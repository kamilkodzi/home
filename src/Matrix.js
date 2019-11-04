import React,{useState,useEffect} from 'react';
import MATRIX_FRAMES from './data/matrix';

function Matrix() {
    const[index,setIndex]=useState(0);

useEffect(()=>{
    const interval= setInterval(
        ()=>{
            setIndex(storedIndex=>{
                return (storedIndex+1)%MATRIX_FRAMES.length
            })
        },
        1000
    );
        return ()=>clearInterval(interval);
},[]);

    return (
        <div className="Matrix">
            <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
        </div>
    )
}

export default Matrix;