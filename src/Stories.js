import React, {useState,useEffect} from 'react';

function Stories(){
const [stories,setStories]=useState([]);

useEffect(()=>{
    fetch('https://news-proxy-server.appspot.com/topstories?_sm_au_=iVVKrZfZLkMJfnQP')
    .then(response=>response.json())
    .then(json=>setStories(json));
},[]);

return(
    <div className="Stories">
        <h3>Stories</h3>
        {
            stories.map(story=>{
                const{id,by,time,title,url}=story;
               return(
                   <div key={id}>
                       <a href={url}>{title}</a>
                       <div>{by} - {new Date(time).toLocaleTimeString()}</div>
                   </div>
               ) 
            })
        }
    </div>
);
}

export default Stories;