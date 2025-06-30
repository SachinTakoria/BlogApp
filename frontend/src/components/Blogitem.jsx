import React from "react";
import "../Style.css";
import { assets } from "../Assets/assets";



const Blogitem = ({title,description,category,image}) => {
  return (
    <div className="Blogmain">
      <div>
      
      <img  
        src={image}
        width={400}
        height={400}
        className=""
        alt=""
      />
      </div>
      
      <p className="p-one">{category}</p>
      <div className="blogmainone">
        <h5>{title}</h5>
        <p className="p-two">{description}</p>
        <div className="blogs">
          
          Read more <img src={assets.arrow} alt="" width={12}/>
        </div>
      </div>
    </div>
  );
};

export default Blogitem;
