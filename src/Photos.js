import React from "react";

export default function Photos(props) {
    if(props.photos) {
     return (
         <section className="photos">
             <div className="row">
             {props.photos.map(function (photo, index)  {
                return(
                <div className="col-4" key={index}> 
                <img className="img-fluid" src={photo.src.landscape} /> 
                </div>
                 ); 
             })}
             </div>             
         </section>
     );
    } else {
        return null;
    }
}