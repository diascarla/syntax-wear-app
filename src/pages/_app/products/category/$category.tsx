import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProductsList } from "../../../../components/ProductsList";
import { getProductsByCategory } from "../../../../services/productsService";
import type { Product } from "../../../../interfaces/product";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),
});

function RouteComponent() {
  const { category } = Route.useParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const products = await getProductsByCategory(category);
        // Ensure each product has a color property (default to empty string if missing)
        const productsWithColor = products.map((product: any) => ({
          color: "",
          ...product,
        }));
        setFilteredProducts(productsWithColor);
      } catch (err) {
        setError("Falha ao carregar os produtos. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (isLoading) {
    return (
      <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh] flex flex-col items-center justify-center">
        <p className="text-xl">Carregando produtos...</p>
      </section>
    );
  }

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">
        Conforto expecional para suas aventuras do dia-a-dia
      </h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      {!error &&
        (filteredProducts.length === 0 ? (
          <div className="text-center">
            <p>Nenhum produto encontrado para esta categoria.</p>
            <Link
              to="/products"
              className="text-accent hover:text-accent-hover underline"
            >
              Voltar para produtos
            </Link>
          </div>
        ) : (
          <ProductsList products={filteredProducts} />
        ))}
    </section>
  );
}
