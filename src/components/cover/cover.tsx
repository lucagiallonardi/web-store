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
            return (<div className={imagenActual == index ? `${style.slide} ${style.active}` : style.slide}>
                {imagenActual == index && (
                <img key={index} src={imagen} alt="imagen" className={style.imagenCover}/>)}
                </div>)
        })}
        <IconChevronRight onClick={siguienteImagen} className={style.siguienteButtonSlide}/>
    </div>
);
}