"use client";

import style from './navbar.module.css';
import React, { useState } from 'react';
import {IconCaretDown, IconSearch, IconCaretUp,IconArrowNarrowUp} from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';
import {IconHeartFilled} from '@tabler/icons-react';
import Link from 'next/link';

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [favClicked, setFavClicked] = useState(false);
  const handleClick = ()=>{
    setClicked(!clicked);
  }

  const handleFavClick = ()=>{
    setFavClicked(!favClicked);
  }

  const topButtonNavBar = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  

  const {ref: navBarRef, inView: myNavBarIsVisible} = useInView();

  return (
    <div className={!favClicked && !clicked ? style.navbarContainer : `${style.navBarConFav} ${style.navbarContainer}`}>
      <div className={style.searchBarNav}><IconSearch className={style.iconSearchNav}/>
      <input placeholder="Buscar" className={style.searchNav}></input></div>
      <div ref={navBarRef} className={style.logoNav}>ECOMMERCE</div>      
      <Link className={style.itemNav} href="/">Home</Link>
      <Link className={style.itemNav} href="/gallery">Galeria</Link>
      <div onClick={handleClick} className={ !clicked ? style.itemNav : style.productosClickeado}>Productos <IconCaretDown className={!clicked ? style.IconCaretDown : style.IconCaretDownDisabled}/> <IconCaretUp className={!clicked ? style.IconCaretUpDisabled : style.IconCaretUp}/>
      <div className={!clicked ? style.productsNavDisplayNone : style.productsNavDisplay}>
        <div className={style.productItemNav}><Link href="/products/category1"><h2>Producto1</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/products/category2"><h2>Producto2</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/products/category3"><h2>Producto3</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/products/category4"><h2>Producto4</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
      </div>
      </div>
      <Link className={style.itemNav} href="/marketplace">Marketplace</Link>
      <IconHeartFilled className={!favClicked ? style.itemNav : style.itemFavColor} onClick={handleFavClick}/>
      
        <div className={!favClicked ? style.favoritesContainerNone : style.favoritesContainer}>
            <h3>Favoritos</h3></div>
            
        <IconArrowNarrowUp className={myNavBarIsVisible ? style.topNavBarNone : style.topNavBar} onClick={topButtonNavBar}/>
    </div>
  )
}
