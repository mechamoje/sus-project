import React from 'react'
import New from '../../images/setas.png'
import './list.css'
import Doll from "../../images/bonecafalando.gif";

export default function List() {
  return (
    <> 
    <div id="doll-container">
    <picture>
      <img id="doll-list" src={Doll} alt="avatar de boneca" />
    </picture>
    </div>

    <ol> 
        <li> Reduzir o consumo de plásticos (que tal sacolas retornáveis?) 
        <input type='checkbox'/>  
        <button className='btn-img'> <img className='btn-img' src={New} /> </button>  
         </li>
    </ol>
    </>
  )
}
