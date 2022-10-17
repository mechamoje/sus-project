import React from 'react'
import Emi from '../../images/emilogo.png'
import Letters from '../../images/letters.png'
import './header.css'

export default function Header() {
  return (
    <header> 
          <img className='header-logo-img' src={Emi} alt="loading..." />
          <img className='header-letter-img' src={Letters} alt="loading..." />
          <a id=''> Link </a>
    </header>
  )
}
