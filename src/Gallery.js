import React,{useState,useEffect} from 'react';
import PICTURES from './data/pictures';

function Gallery(){
    const[index,setIndex]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
           setIndex(something=>{
                return (something+1)%PICTURES.length;
            })
        },3000);

        return ()=>{clearInterval(interval)};
    },[])

    return(
        <div className="Gallery">
            <img
                src={PICTURES[index].image}
                alt='gallery'
            />
        </div>
    )
}

export default Gallery;