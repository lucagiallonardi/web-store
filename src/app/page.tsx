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
const APIUrl = "https://fakestoreapi.com/products?limit=12";


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
  "https://media.istockphoto.com/id/1357417259/es/foto/primer-plano-del-anillo-de-bodas-de-lujo-en-fondo-de-purpurina-azul-oscuro.jpg?s=612x612&w=0&k=20&c=2phA-HXfLIqM1SJfIiKYQBiJwnUAUjMPveumm0HDyQ0=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc4F71WQztZAzxRKPAEZBsSZaWt4iwTjgWSYDWtniS4M3is0LwgfKGqQNsK69Tss7Saw&usqp=CAU",
  "https://img.freepik.com/fotos-premium/gemas-zafiro-azul-joyas-hechas-piedras-preciosas-joyeria-disenador-pancartas_726113-1481.jpg"
];



  return (
    <div>
      <Cover imagenes={coverImagenes}/>
      <section id='productsHome' className={styles.productsSectionHome}>
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
