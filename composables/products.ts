export const useProducts = () => {
  const products = useState("products", () => [
    {
      title: "Product A",
      id: "product_a",
    },
    {
      title: "Product B",
      id: "product_b",
    },
    {
      title: "Product C",
      id: "product_c",
    },
  ]);

  return {
    products: readonly(products),
  };
}
