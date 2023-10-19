
import NavBar from '@/components/navbar/navbar'
import styles from './page.module.css'
import Cover from '@/components/cover/cover'
import ItemCard from '@/components/itemCard/itemCard';




export default function Home() {

const coverImagenes:any[] = [ 
  "https://media.istockphoto.com/id/1357417259/es/foto/primer-plano-del-anillo-de-bodas-de-lujo-en-fondo-de-purpurina-azul-oscuro.jpg?s=612x612&w=0&k=20&c=2phA-HXfLIqM1SJfIiKYQBiJwnUAUjMPveumm0HDyQ0=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc4F71WQztZAzxRKPAEZBsSZaWt4iwTjgWSYDWtniS4M3is0LwgfKGqQNsK69Tss7Saw&usqp=CAU",
  "https://img.freepik.com/fotos-premium/gemas-zafiro-azul-joyas-hechas-piedras-preciosas-joyeria-disenador-pancartas_726113-1481.jpg"
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
