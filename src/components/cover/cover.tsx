"use client";
import React, { useState } from 'react';    
import style from './cover.module.css';
import {IconChevronLeft, IconChevronRight} from '@tabler/icons-react';


interface CoverProps {
  imagenes: string[]; 
}

export default function Cover({imagenes} : CoverProps){
    const [imagenActual, setImagenActual] = useState(0);
    const cantidadImagenes = imagenes?.length;

    if(cantidadImagenes == 0){
        return <p>No hay imagenes</p>;
    }

    const siguienteImagen = ()=>{
        setImagenActual(imagenActual == cantidadImagenes-1 ? 0 : imagenActual + 1)
    }

    const anteriorImagen = ()=>{
        setImagenActual(imagenActual == 0 ? cantidadImagenes-1 : imagenActual -1 )
    }

    return(
    <div className={style.coverContainer}>
        <IconChevronLeft onClick={anteriorImagen} className={style.anteriorButtonSlide}/>
        {imagenes.map((imagen, index)=>{
            return (<div key={index} className={imagenActual == index ? `${style.slide} ${style.active}` : style.slide}>
                {imagenActual == index && (
                <div className={style.divImagenCover}><img key={index} src={imagen} alt="imagen" className={style.imagenCover}/>
                <div className={style.divDescription}>
                <h3>#SCANDLEXPERIENCE</h3>  
                <h2>Always <i className={style.i1}>cool and soothe</i> your feelings available in a variety of <i className={style.i2}>candle</i></h2>  
                <div className={style.divButtonCover}>SHOW PRODUCTS</div>
                </div></div>)}
                </div>)
        })}
        <IconChevronRight onClick={siguienteImagen} className={style.siguienteButtonSlide}/>
    </div>
);
}