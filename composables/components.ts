export const useComponents = () => {
  const components = useState("components", () => [
    {
      title: "Component A",
      id: "component_a_a",
      productId: "product_a",
    },
    {
      title: "Component B",
      id: "component_a_b",
      productId: "product_a",
    },
    {
      title: "Component C",
      id: "component_a_c",
      productId: "product_a",
    },
    {
      title: "Component B-A",
      id: "component_b_a",
      productId: "product_b",
    },
    {
      title: "Component B-B",
      id: "component_b_b",
      productId: "product_b",
    },
    {
      title: "Component B-C",
      id: "component_b_c",
      productId: "product_b",
    },
    {
      title: "Component C-A",
      id: "component_c_a",
      productId: "product_c",
    },
    {
      title: "Component C-B",
      id: "component_c_b",
      productId: "product_c",
    },
    {
      title: "Component C-C",
      id: "component_c_c",
      productId: "product_c",
    },
  ]);

  return {
    components: readonly(components),
  };
}
