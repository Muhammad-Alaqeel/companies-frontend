
import React from "react";
import  './styles/Card.css';
function Card(props) {






  return (
  //favicon.ico
     
<div className="path-card">


<img id="min" src={props.img} alt="insert pic"/>

 
<h4 className="setTitle">{props.name}</h4>



<p className="hide-desc">

{props.brief}

</p>
<br/>
<h1 className="arrow">➔</h1>
</div>

  );
}

export default Card;




