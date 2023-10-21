"use client";
import React, {useState} from 'react';
import style from './itemCard.module.css';
import {IconHeartFilled, IconEye, IconShoppingCart, IconStarFilled, IconX} from '@tabler/icons-react';


interface ItemCardProps {
    product: {
        id:number,
        title:string,
        price:string,
        category:string,
        description:string,
        image:string
    }; 
  } 


export default function ItemCard({product}:ItemCardProps) {
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
                <IconHeartFilled className={style.IconHeartFilled}/>
                </div></div>
            <h3 className={style.itemCardTitle}>{product.title}</h3>
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
                <div className={style.descViewItem}>
                <IconX className={style.crossViewItem} onClick={handleClick}/>
                <h3>{product.title}</h3>
                <h5 className={style.qualifyItemCard}>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h5>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <button className={style.buyButtonView}>COMPRAR</button>
                </div>
                </div>
            </div>
        </div>
    )
}