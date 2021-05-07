import React from 'react';
import './Card.css';


const Card = props =>{
    return(
          <div class="card cardcss" >
            <img src={props.url} class="card-img-top" alt="No Images"></img>
            <div class="card-body">
             <h5>{props.title}</h5>
             <h5><i class="fas fa-envelope-square"></i> {props.email}</h5>
            </div>
          </div>
    );
}

export default Card;