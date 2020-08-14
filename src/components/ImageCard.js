import React from 'react';
import './imageCard.css';

const ImageCard=(props)=>{
return(
    <div>
 <article class="wallpaper">
            <img src={props.uri} alt="Wallpaper #1" class="wallpaper" />
          </article>
    </div>

)


}
export default ImageCard;
