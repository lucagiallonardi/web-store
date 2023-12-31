"use client";
import React, {useState} from 'react';
import style from './itemCard.module.css';
import {IconHeartFilled, IconEye, IconShoppingCart, IconStarFilled, IconX} from '@tabler/icons-react';
import { useFavorites } from '../../app/utils/favoritesContext';
import ProductsProps from '../../app/utils/productsPropsInterface';
import Link from 'next/link';




export default function ItemCard(product:ProductsProps) {

    //funciones para favoritos
const { addFavoriteProduct } = useFavorites();
const handleAddToFavorites = () => {
addFavoriteProduct(product);
};

const [clicked, setClicked] = useState(false);

const handleClick = ()=>{
    setClicked(!clicked);
}

    return(
        <div className={style.itemCardContainer}>
            <div><img src={product.image} alt={`foto de ${product.title}`} className={style.itemCardImg}/>
            <div className={style.itemCardImgHover}>
                <IconShoppingCart className={style.IconShoppingCart}/>
                <IconEye className={style.IconEye} onClick={handleClick}/>  
                <IconHeartFilled className={style.IconHeartFilled} onClick={handleAddToFavorites}/>
                </div></div>
            <Link href={`/product/${product.id}`} className={style.itemCardTitle}><h3>{product.title}</h3></Link>
            <h4 className={style.itemCardPrice}>${product.price}</h4>
            <h5 className={style.itemCardQualy}>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h5>

            <div className={style.productViewContainerAll}>
                <div className={clicked ? style.viewIContainer : style.viewIContainerNone} onClick={handleClick}></div>
                <div className={clicked ? style.viewIWindow : style.viewIWindowNone}>
                <img src={product.image} alt={`foto de ${product.title}`} className={style.viewImgItem}/>
                <IconX className={style.crossViewItem} onClick={handleClick}/>
                <div className={style.descViewItem}>
                <h3>{product.title}</h3>
                <h5 className={style.qualifyItemCard}>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h5>
                <h4>${product.price}</h4>
                <p>Categoria: {product.category}</p>
                <p>{product.description}</p>
                <div className={style.buttonsDivView}><span className={style.buyButtonView}>COMPRAR</span><IconHeartFilled className={style.IconHeartFilledView} onClick={handleAddToFavorites}/></div>
                </div>
                </div>
            </div>
        </div>
    )
}