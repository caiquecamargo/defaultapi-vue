import { api } from "@/modules/services.js";

export async function getProductsCategories() {
  const response = await api.get("products/categories");
  const categories = await response.data.filter(item => item.name !== "Uncategorized");

  return categories;
}