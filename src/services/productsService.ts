import type { Product } from "../types/product";
import { API_BASE_URL } from "../components/SubscriptionForm/api";

export const getProductsByCategory = async (
  categoryName: string,
): Promise<Product[]> => {
  
  const response = await fetch(`${API_BASE_URL}/products/category/${categoryName}`);

  if (!response.ok) {
    throw new Error("Falha ao buscar os produtos da API.");
  }

  return await response.json();
};