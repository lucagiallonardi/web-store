"use client";
import { FC, useState, useEffect} from 'react';
import style from './page.module.css'
import ProductsProps from '../../utils/productsPropsInterface';
import {IconHeartFilled, IconStarFilled} from '@tabler/icons-react'
import { useFavorites } from '../../utils/favoritesContext';
import ItemCard from '@/components/itemCard/itemCard';

interface pageProps{
    params:{id: string,
    category: string}
}

const page: FC<pageProps>=({params}, product:ProductsProps)=>{
    const [Products, setProducts] = useState<ProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ProductsCategory, setProductsCategory] = useState<ProductsProps[]>([]);

    useEffect(() => {
        setIsLoading(true);
      
        let apiUrl = `https://fakestoreapi.com/products/${params.id}`;
  
        fetch(`${apiUrl}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al cargar los datos");
            }
            return response.json();
          })
          .then((result) => {
            setProducts([result]);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      }, []);

      useEffect(() => {
        setIsLoading(true);
      
        let apiCategory = 'https://fakestoreapi.com/products?limit=5';
  
        fetch(`${apiCategory}`)
          .then((responsed) => {
            if (!responsed.ok) {
              throw new Error("Error al cargar los datos");
            }
            return responsed.json();
          })
          .then((resulted: ProductsProps[]) => {
            setProductsCategory(() =>
            resulted.filter((categoryProduct: ProductsProps) =>
              Products.every((product) => product.id !== categoryProduct.id)
            )
          );
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      }, [Products]);

      
      if(isLoading){
        return<div>Loading....</div>
      }
      
      if(error){
        return <div>Error</div>
      }



      const { addFavoriteProduct } = useFavorites();
        const handleAddToFavorites = () => {
        addFavoriteProduct(product);
        };  


    return <div className={style.div}>
        {Products.map((product)=>(
        <div><div className={style.productIdAllContainer}>
        <div className={style.productIdImgContainer}>
        <img src={product.image} alt={`imagen representativa de ${product.title}`}/></div>
        <div className={style.productIdInfoContainer}>
        <h1>{product.title}</h1>    
        <h2>{product.price}</h2>
        <h3 className={style.productIdQualify}>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                <IconStarFilled/>
                </h3>
        <h5>{product.category}</h5>
        <p>{product.description}</p>
        <div className={style.productIdButtonsDiv}><span className={style.productIdBuyButton}>COMPRAR</span><IconHeartFilled className={style.productIdIconHeartFilled} onClick={handleAddToFavorites}/></div>
        </div>
        </div>
        <div className={style.productIdDescription}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sed commodi expedita adipisci eum quibusdam, voluptatem nam, molestias quidem animi beatae laborum rerum. Nobis possimus nisi perferendis aspernatur nihil. Aliquam maiores cupiditate obcaecati quidem corporis dolore eum a tempore reiciendis minima aspernatur quibusdam est amet, iste ipsa, explicabo iusto modi itaque hic delectus ad debitis deserunt? Et qui nemo cum sint blanditiis! Sunt error eveniet iusto. Eos, deleniti natus! Inventore adipisci ipsum qui numquam. Hic illo, consequatur alias qui debitis assumenda est vero ut pariatur sunt repellat aliquam nam corrupti facilis dignissimos, possimus deleniti neque, iste nisi soluta. Totam, consectetur.</p>
        </div>
        </div>
            ))} 

    <div className={style.productIdRecomendaciones}>
        <div className={style.productIdRecTitle}>Recomendaciones</div>
        <div className={style.productIdItemsRec}>
      {ProductsCategory.length > 4 ? 
        ProductsCategory.slice(0, 4).map((product, index)=>(
            <ItemCard key={index} {...product}/>          
          ))
       :
      ProductsCategory.map((product, index)=>(
        <ItemCard key={index} {...product}/>          
      ))}
      </div>
      </div>
    </div>
}

export default page;