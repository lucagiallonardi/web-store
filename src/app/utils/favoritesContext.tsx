import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
        id:number,
        title:string,
        price:string,
        category:string,
        description:string,
        image:string
  } 

interface FavoritesContextType {
  favoriteProducts: Product[];
  addFavoriteProduct: (product: Product) => void;
  removeFavoriteProduct: (product: Product) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const addFavoriteProduct = (product: Product) => {
    if (!favoriteProducts.find((favProduct) => favProduct.id === product.id)) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const removeFavoriteProduct = (product: Product) => {
    const updatedFavorites = favoriteProducts.filter(
      (favProduct) => favProduct.id !== product.id
    );
    setFavoriteProducts(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteProducts, addFavoriteProduct, removeFavoriteProduct }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites debe utilizarse dentro de un FavoritesProvider');
  }
  return context;
}
