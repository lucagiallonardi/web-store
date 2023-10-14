"use client";

import style from './navbar.module.css';
import React, { useState } from 'react';
import {IconCaretDown, IconSearch, IconCaretUp,IconArrowNarrowUp} from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked(!clicked);
  }

  const topButtonNavBar = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  

  const {ref: navBarRef, inView: myNavBarIsVisible} = useInView();

  return (
    <div className={style.navbarContainer}>
      <div ref={navBarRef} className={style.logoNav}>Logo</div>
      <div className={style.searchBarNav}><IconSearch className={style.iconSearchNav}/>
      <input placeholder="Buscar" className={style.searchNav}></input></div>
      <div className={style.itemNav}>Home</div>
      <div className={style.itemNav}>Galeria</div>
      <div onClick={handleClick} className={ !clicked ? style.itemNav : style.productosClickeado}>Productos <IconCaretDown className={!clicked ? style.IconCaretDown : style.IconCaretDownDisabled}/> <IconCaretUp className={!clicked ? style.IconCaretUpDisabled : style.IconCaretUp}/>
      <div className={!clicked ? style.productsNavDisplayNone : style.productsNavDisplay}>
        <div className={style.productItemNav}><h2>Producto1</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><h2>Producto2</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><h2>Producto3</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><h2>Producto4</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
      </div>
      </div>
      <div className={style.itemNav}>Marketplace</div>
      
        <IconArrowNarrowUp className={myNavBarIsVisible ? style.topNavBarNone : style.topNavBar} onClick={topButtonNavBar}/>
      

      
    </div>
  )
}
