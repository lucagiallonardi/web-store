  "use client";
  import React, {useState, useEffect, ChangeEvent, KeyboardEvent} from 'react';
  import {IconSearch} from '@tabler/icons-react';
  import style from './page.module.css'
  import ItemCard from '@/components/itemCard/itemCard';
  import ProductsProps from '../utils/productsPropsInterface';
  import {IconStarFilled, IconChevronRight} from '@tabler/icons-react';
  import { useInView } from 'react-intersection-observer';
  



  export default function Marketplace(){
  const [Products, setProducts] = useState<ProductsProps[]>([]);
  const [FetchProducts, setFetchProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorFiltrando, setErrorFiltrando] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);
  const [priceActive, setPriceActive] = useState(false);
  const [qualyActive, setQualyActive] = useState(false);
  const {ref: divRef, inView: myDivRefIsVisible} = useInView();


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


    const handleActiveCategory = ()=>{
      setCategoryActive(!categoryActive);
    }

    const handleActivePrice = ()=>{
      setPriceActive(!priceActive);
    }

    const handleActiveQualy = ()=>{
      setQualyActive(!qualyActive);
    }

      return(
          <div>
              <section>
                <div className={style.marketplaceAllContainer}>
                <div className={style.productosMarketplace}>
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
                  <div className={!errorFiltrando ? style.errorFiltrandoNone : style.errorFiltrando}>No encontraron coincidencias con "{searchTerm}"</div></div>
                  <div className={!myDivRefIsVisible? style.filtrosMarketplaceDiv : style.filtrosMarketplaceDivBlock}>
                  <div className={style.itemFiltros}>FILTROS</div>
                  <div className={style.itemFiltros}><span onClick={handleActiveCategory}>Categoria <IconChevronRight className={!categoryActive?`${style.iconCategoryFilterNone}`:`${style.iconCategoryFilterActive}`}/></span>
                  <label className={!categoryActive ? `${style.categoryFilterNone}` : `${style.categoryFilterActive}`}>
                      <input type="checkbox"/>Categoria 1
                  </label>
                  <label className={!categoryActive ? `${style.categoryFilterNone}` : `${style.categoryFilterActive}`}>
                      <input type="checkbox"/>Categoria 2
                  </label>
                  <label className={!categoryActive ? `${style.categoryFilterNone}` : `${style.categoryFilterActive}`}>
                      <input type="checkbox"/>Categoria 3
                  </label>
                  </div>
                  <div className={style.itemFiltros}><span onClick={handleActivePrice}>Precio <IconChevronRight className={!priceActive?`${style.iconPriceFilterNone}`: `${style.iconPriceFilterActive}`}/></span>
                  <div className={!priceActive ? `${style.priceFilterNone}` : `${style.priceFilterActive}`}>$ <input placeholder='min'/> / $<input placeholder='max'/></div>
                  </div>
                  <div className={style.itemFiltros}><span onClick={handleActiveQualy}>Calificaciones <IconChevronRight className={!qualyActive?`${style.iconQualyFilterNone}`:`${style.iconQualyFilterActive}`}/></span>
                  <label className={!qualyActive ? `${style.qualyFilterNone}` : `${style.qualyFilterActive}`}>
                      <input type="checkbox"/><IconStarFilled/> 0 - 1 
                  </label>
                  <label className={!qualyActive ? `${style.qualyFilterNone}` : `${style.qualyFilterActive}`}>
                      <input type="checkbox"/><IconStarFilled/><IconStarFilled/> 0 - 2
                  </label>
                  <label className={!qualyActive ? `${style.qualyFilterNone}` : `${style.qualyFilterActive}`}>
                      <input type="checkbox"/><IconStarFilled/><IconStarFilled/><IconStarFilled/> 0 - 3
                  </label>
                  <label className={!qualyActive ? `${style.qualyFilterNone}` : `${style.qualyFilterActive}`}>
                      <input type="checkbox"/><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/> 0 - 4 
                  </label>
                  <label className={!qualyActive ? `${style.qualyFilterNone}` : `${style.qualyFilterActive}`}>
                      <input type="checkbox"/><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/> 0 - 5
                  </label>
                  
                  </div>
                </div>
                  </div>
                  <div ref={divRef} className={style.referenceDivMarketplace}></div>
              </section>
          </div>
      )
  }