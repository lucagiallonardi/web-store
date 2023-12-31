"use client";
import { FavoritesProvider } from "@/app/utils/favoritesContext";
import NavBar from "./navbar/navbar"; 
import React, {ReactNode, useState, useEffect } from 'react';
import style from './layout.module.css';
import Footer from "./footer/footer";

export default function Layout({children}: { children: ReactNode }){
    const [scrollDown, setScrollDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > prevScrollY) {
            setScrollDown(true);
        } else if (currentScrollY < prevScrollY) {
            setScrollDown(false);
        } else {
            setScrollDown(false);
        }
  
        setPrevScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);
    
    return(
        <FavoritesProvider>
            <main>
            <NavBar scrollDown={scrollDown}/>
                {children}
                <Footer/>
                </main>                
        </FavoritesProvider>
    )
}