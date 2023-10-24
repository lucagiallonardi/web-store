"use client";

import style from './navbar.module.css';
import React, { useState, useEffect } from 'react';
import {IconCaretDown, IconCaretUp,IconArrowNarrowUp} from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';
import {IconHeartFilled, IconShoppingCart, IconTrashX, IconChevronRight} from '@tabler/icons-react';
import Link from 'next/link';
import { useFavorites } from '../../app/utils/favoritesContext';
import Product from '../../app/utils/productsPropsInterface';


interface NavBarProps {
  scrollDown?: boolean;
}

export default function NavBar({ scrollDown }: NavBarProps) {


  
  const [clicked, setClicked] = useState(false);
  const { favoriteProducts } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const handleClick = ()=>{
    setClicked(!clicked);
  }

  const handleFavClick = ()=>{
    setShowFavorites(!showFavorites);
  }

  // REMOVER FAVORITOS
  const { removeFavoriteProduct } = useFavorites();
  const handleRemoveToFavorites = (product:Product) => {
    removeFavoriteProduct(product);
  };

  const topButtonNavBar = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  

  const {ref: navBarRef, inView: myNavBarIsVisible} = useInView();

  

  
  useEffect(() => {
    if (favoriteProducts.length > 0) {
      setShowFavorites(true);
    }
  }, [favoriteProducts]); 


  return (
    <div className={!showFavorites && !clicked && scrollDown ? style.navbarContainer : `${style.navBarConFav} ${style.navbarContainer}`}>
      <div ref={navBarRef} className={style.logoNav}>ECOMMERCE</div>      
      <Link className={style.itemNav} href="/">Home</Link>
      <Link className={style.itemNav} href="/gallery">Galeria</Link>
      <div onClick={handleClick} className={ !clicked ? style.itemNav : style.productosClickeado}>Productos <IconCaretDown className={!clicked ? style.IconCaretDown : style.IconCaretDownDisabled}/> <IconCaretUp className={!clicked ? style.IconCaretUpDisabled : style.IconCaretUp}/>
      <div className={!clicked ? style.productsNavDisplayNone : style.productsNavDisplay}>
        <div className={style.productItemNav}><Link href="/categories/category1"><h2>Producto1</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/categories/category2"><h2>Producto2</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/categories/category3"><h2>Producto3</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
        <div className={style.productItemNav}><Link href="/categories/category4"><h2>Producto4</h2></Link><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nostrum.</p></div>
      </div>
      </div>
      <Link className={style.itemNav} href="/marketplace">Marketplace</Link>
      <IconHeartFilled className={!showFavorites ? style.itemNav : style.itemFavColor} onClick={handleFavClick}/>
      
        <div className={!showFavorites ? style.favoritesContainerNone : style.favoritesContainer}>
          <IconChevronRight className={style.IconChevronRightClose} onClick={handleFavClick}/>
        {showFavorites && (
        <div>
          <h3 className={style.divFavoriteListTitle}>Favoritos</h3>
          <ul>
            {favoriteProducts.length == 0 ? <div className={style.sinProducts}>No hay ningún favorito</div> :
            favoriteProducts.map((product) => ( 
              <li className={style.liFavItem} key={product.id}><div className={style.divFavItem}>
                <div className={style.imgFavDivItem}><img src={product.image} alt={product.title}/></div>
                <div className={style.descFavItemDiv}>
                <h5>{product.title}</h5>
                <div className={style.divPriceAndBuyDivItem}>
                <h6>${product.price}</h6><span><IconShoppingCart className={style.shoppinCartItemDiv}/>COMPRAR</span>
                </div>
                </div></div><IconTrashX  className={style.trashXicon} onClick={() => handleRemoveToFavorites(product)}/></li>
            ))}
          </ul>
        </div>
      )}</div>
            
        <IconArrowNarrowUp className={myNavBarIsVisible || showFavorites ? style.topNavBarNone : style.topNavBar} onClick={topButtonNavBar}/>
    </div>
  )
}
