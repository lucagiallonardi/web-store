
import NavBar from '@/components/navbar/navbar'
import styles from './page.module.css'
import Cover from '@/components/cover/cover'
import ItemCard from '@/components/itemCard/itemCard';




export default function Home() {

const coverImagenes:any[] = [ 
  "https://i.postimg.cc/PrkSZ3Z1/c.jpg",
  "https://i.postimg.cc/fLfbHLJH/1279479.jpg",
  "https://i.postimg.cc/W3zsQZG6/118264-Gg-N7ie-HJEoc-WR5z-Ptq1m-B2v3-Y96x-ULFas-h2.jpg"
];


  return (
   <div>
      <NavBar/>
      <Cover imagenes={coverImagenes}/>
      <ItemCard
  props={{
    srcImgItemCard: "https://anamika-theme.myshopify.com/cdn/shop/products/Home-product-1.jpg?v=1594985739",
    titleItemCard: "Título del producto",
    priceItemCard: "$5000",
    descItemCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut id unde, distinctio delectus quidem natus error maxime, ipsa eos eligendi blanditiis, perferendis ipsam aperiam non veritatis quaerat eum impedit.",
    qualyItemCard: 4.5
  }}
/>
   </div>
  )
}
