import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <p>ID del Producto: {id}</p>

    </div>
  );
}