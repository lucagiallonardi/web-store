"use client";
import { FavoritesProvider } from "@/app/utils/favoritesContext";
import NavBar from "./navbar/navbar";
import { ReactNode} from 'react'; 


export default function Layout({children}: { children: ReactNode }){
    
    
    return(
        <FavoritesProvider>
            <NavBar/>
            <main>
                {children}
                </main>
        </FavoritesProvider>
    )
}