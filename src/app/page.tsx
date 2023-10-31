"use client";
import React, {useState, useEffect} from 'react';
import styles from './page.module.css';
import Cover from '@/components/cover/cover';
import ItemCard from '@/components/itemCard/itemCard';
import ProductsProps from './utils/productsPropsInterface';





export default function Home() {

  const [Products, setProducts] = useState<ProductsProps[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const APIUrl = "https://fakestoreapi.com/products?limit=4";


useEffect(() => {
  setIsLoading(true);


  fetch(`${APIUrl}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar los datos");
      }
      return response.json();
    })
    .then((result) => {
      setProducts(result);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
}, []);

if (isLoading) {
  return <div>Cargando...</div>;
}
  
if(error){
  return <div>Error</div>
}


const coverImagenes:any[] = [ 
  "https://i.postimg.cc/hGTBWzWc/vela.png",
  "https://i.postimg.cc/hGTBWzWc/vela.png",
  "https://i.postimg.cc/hGTBWzWc/vela.png"
];



  return (
    <div className={styles.paginaCompleta}>
      <Cover imagenes={coverImagenes}/>
      <section id='productsHome' className={styles.productsSectionHome}>
        <h3>TENDENCIAS</h3>
        <h2>Productos</h2>
        <div className={styles.divProductsHome}>
      {Products.map((product, index)=>(
        <ItemCard key={index} {...product}/>          
      ))}
      </div>
      </section>
      </div>
  )
}
