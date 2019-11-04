import React,{useState,useEffect} from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000;

function Gallery(){
    const[index,setIndex]=useState(0);
    const[delay,setDelay]=useState(3*SECONDS);
    const[increment,setIncrement]=useState(1);

    useEffect(()=>{
        const interval=setInterval(()=>{
           setIndex(something=>{
                return (something+1)%PICTURES.length;
            })
        },delay);

        return ()=>{clearInterval(interval)};
    },[])

const updateDelay=event=>{
    setDelay(Number(event.target.value) * SECONDS);
}


    return(
        <div className="Gallery">
            <img
                src={PICTURES[index].image}
                alt='gallery'
            />
            <div className="multiform">
                <div>
                    Gallery transition delay (seconds):
                    <input type="numbers" onChange={updateDelay}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;