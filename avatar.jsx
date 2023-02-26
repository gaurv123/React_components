import React from "react";
import "./App.css";

function Avatar(props){
    return (
       <div className="profile_pic">
            <img className="pic" src={props.src} alt="No image found"/>
        </div>  
        

    )
}
export default Avatar;