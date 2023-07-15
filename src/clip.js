import React from "react"; 
import ReactPlayer from 'react-player'
import clips from "./styles/clip.module.css"; 
//needed react player. 



function Clip({ src }) {
   return (
     <div className={clips.clip}>
       <ReactPlayer
         className={clips.clip.reactplayer}
         height={"100%"}
         url={src}
         controls={true}
       />
     </div>
   );
 }
 

export default Clip; 
