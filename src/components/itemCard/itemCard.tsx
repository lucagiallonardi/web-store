"use client";
import React, {useState} from 'react';
import style from './itemCard.module.css';
import {IconHeartFilled, IconEye, IconShoppingCart, IconStarFilled, IconX} from '@tabler/icons-react';

interface ItemCardProps {
    props: {
        srcImgItemCard:string,
        titleItemCard:string,
        priceItemCard:string,
        descItemCard: string,
        qualyItemCard: number
    }; 
  }

export default function ItemCard({props}:ItemCardProps) {
const [clicked, setClicked] = useState(false);

const handleClick = ()=>{
    setClicked(!clicked);
}

    return(
        <div className={style.itemCardContainer}>
            <div><img src={props.srcImgItemCard} alt={`foto de ${props.titleItemCard}`} className={style.itemCardImg}/>
            <div className={style.itemCardImgHover}>
                <IconShoppingCart className={style.IconShoppingCart}/>
                <IconEye className={style.IconEye} onClick={handleClick}/>  
                <IconHeartFilled className={style.IconHeartFilled}/>
                </div></div>
            <h3 className={style.itemCardTitle}>{props.titleItemCard}</h3>
            <h4 className={style.itemCardPrice}>{props.priceItemCard}</h4>
            <h5 className={style.itemCardQualy}>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h5>

            <div className={clicked ? style.viewIContainer : style.viewIContainerNone}>
                <div className={style.viewIWindow}>
                <img src={props.srcImgItemCard} alt={`foto de ${props.titleItemCard}`} className={style.viewImgItem}/>
                <div className={style.descViewItem}>
                <IconX className={style.crossViewItem} onClick={handleClick}/>
                <h3>{props.titleItemCard}</h3>
                <h5>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h5>
                <h4>{props.priceItemCard}</h4>
                <p>{props.descItemCard}</p>
                <button className={style.buyButtonView}>COMPRAR</button>
                </div>
                </div>
            </div>
        </div>
    )
}