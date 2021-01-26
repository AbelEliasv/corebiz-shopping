import React from 'react';
import Star from '../statics/star.png'


function Stars(props) {

  // Este componente renderizara segun la cantidad de estrallas. 
  // TODO : El valor de la valoración no viene desde el backend 

  return (
    <div className="space-x-1">
      <img className="inline-block" src={Star}></img>
      <img className="inline-block" src={Star}></img>
      <img className="inline-block" src={Star}></img>
      <img className="inline-block" src={Star}></img>
      <img className="inline-block" src={Star}></img>
    </div>


  );
}

export default Stars;