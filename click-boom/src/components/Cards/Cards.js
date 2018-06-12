import React from 'react';
import './Cards.css';


const Cards = (props)=>(
        <div className="container">{props.children}</div>
);
export default Cards;