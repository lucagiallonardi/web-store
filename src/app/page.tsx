
import NavBar from '@/components/navbar'
import styles from './page.module.css'
import Cover from '@/components/cover'


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
   </div>
  )
}
