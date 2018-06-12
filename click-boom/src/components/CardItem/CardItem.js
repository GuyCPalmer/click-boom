import React from 'react';
import './CardItem.css';

const CardItem = props => (
    <img onClick = {() => props.sortImages(props.id, props.clicked)} 
        id = {props.id} 
        src = {props.src} 
        className = "img" 
        alt = "vinil cover" 
        data-clicked = {props.clicked}
       />
);
export default CardItem; 