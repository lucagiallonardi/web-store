  "use client";
  import React, {useState, useEffect, ChangeEvent, KeyboardEvent} from 'react';
  import {IconSearch} from '@tabler/icons-react';
  import style from './page.module.css'
  import ItemCard from '@/components/itemCard/itemCard';
  import ProductsProps from '../utils/productsPropsInterface';



  export default function Marketplace(){
  const [Products, setProducts] = useState<ProductsProps[]>([]);
  const [FetchProducts, setFetchProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorFiltrando, setErrorFiltrando] = useState(false);


  useEffect(() => {
      setIsLoading(true);
    
      let apiUrl = "https://fakestoreapi.com/products";

      fetch(`${apiUrl}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos");
          }
          return response.json();
        })
        .then((result) => {
          setFetchProducts(result);
          setProducts(result);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
    
    if(isLoading){
      return<div>Loading....</div>
    }
    
    if(error){
      return <div>Error</div>
    }


    const performLocalSearch = (term: string) => {
      const filteredProducts = Products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      if(filteredProducts.length == 0){
        setErrorFiltrando(true);
      }
      setProducts(filteredProducts);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = e.target.value;
      setErrorFiltrando(false);
      setSearchTerm(newSearchTerm);
      if(newSearchTerm === ""){
        setProducts(FetchProducts);
      }else{performLocalSearch(newSearchTerm);
      }
    };

    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === 'Backspace') {
        // Realiza la búsqueda local cuando se presiona la tecla "Enter"
        performLocalSearch(searchTerm);
      }
    };
    
      return(
          <div>
              <section>
                  <div className={style.searchBarMarketplace}><IconSearch className={style.iconSearchNavMarketplace}/>
                  <input 
                  placeholder="Buscar"
                  className={style.searchNavMarketplace}
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleEnterKey}
                  ></input></div>
                  <h3>Marketplace</h3>
                  <div className={style.divProductsMarketplace}>
                  {Products.map((product, index)=>(
                  <ItemCard key={index} {...product}/>          
                  ))}
                  </div>
                  <div className={!errorFiltrando ? style.errorFiltrandoNone : style.errorFiltrando}>No encontraron coincidencias con "{searchTerm}"</div>
              </section>
          </div>
      )
  }