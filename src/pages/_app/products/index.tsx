import { createFileRoute } from '@tanstack/react-router'
import { ProductsList } from '../../../components/ProductsList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
    head: () => ({
    meta: [
      {title: "Produtos - Início"}
    ]
  })
})

function RouteComponent() {
  return (
    <section className=' container mx-auto pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh]'>
      <h1 className="text-center text-3xl mb-3">Lista de produtos</h1>
      <h2 className='text-center text-2xl mb-10 p-4'>Conforto excepcional para suas aventuras do dia-a-dia</h2>
      <ProductsList products={products} />
    </section>
  )
}
