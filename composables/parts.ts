export const useParts = () => {
  const parts = useState("parts", () => [
    {
      title: "Part A",
      id: "part_a_a",
      componentId: "component_a_a",
      productId: "product_a",
      text: "Part A text Part A text Part A texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
      latestUseDate: "2021-01-01T00:00:00.000Z",
      registeredDate: "2021-01-01T00:00:00.000Z",
      favorite: false,
      tags: ["tag3"],
    },
    {
      title: "Part B",
      id: "part_a_b",
      componentId: "component_a_b",
      productId: "product_a",
      text: "Part B text",
      latestUseDate: "2021-02-11T00:00:00.000Z",
      registeredDate: "2021-01-02T00:00:00.000Z",
      favorite: true,
      tags: ["tag1"],
    },
    {
      title: "Part C",
      id: "part_a_c",
      componentId: "component_a_c",
      productId: "product_a",
      text: "Part C text",
      latestUseDate: "2021-03-01T00:00:00.000Z",
      registeredDate: "2021-01-30T00:00:00.000Z",
      favorite: false,
      tags: ["tag1", "tag3"],
    },
    {
      title: "Part B-A",
      id: "part_b_a",
      componentId: "component_b_a",
      productId: "product_b",
      text: "Part B-A text",
      latestUseDate: "2021-03-01T00:00:00.000Z",
      registeredDate: "2021-02-11T00:00:00.000Z",
      favorite: false,
      tags: ["tag1"],
    },
    {
      title: "Part B-B",
      id: "part_b_b",
      componentId: "component_b_b",
      productId: "product_b",
      text: "Part B-B text",
      latestUseDate: "2022-09-03T00:00:00.000Z",
      registeredDate: "2022-08-04T00:00:00.000Z",
      favorite: false,
      tags: ["tag3"],
    },
    {
      title: "Part B-C",
      id: "part_b_c",
      componentId: "component_b_c",
      productId: "product_b",
      text: "Part B-C text",
      latestUseDate: "2021-11-21T00:00:00.000Z",
      registeredDate: "2021-11-01T00:00:00.000Z",
      favorite: true,
      tags: ["tag1", "tag2"],
    },
    {
      title: "Part C-A",
      id: "part_c_a",
      componentId: "component_c_a",
      productId: "product_c",
      text: "Part C-A text",
      latestUseDate: "2023-08-17T00:00:00.000Z",
      registeredDate: "2022-08-11T00:00:00.000Z",
      favorite: false,
      tags: ["tag3"],
    },
    {
      title: "Part C-B",
      id: "part_c_b",
      componentId: "component_c_b",
      productId: "product_c",
      text: "Part C-B text",
      latestUseDate: "2023-01-03T00:00:00.000Z",
      registeredDate: "2021-01-01T00:00:00.000Z",
      favorite: false,
      tags: [],
    },
    {
      title: "Part C-C",
      id: "part_c_c",
      componentId: "component_c_c",
      productId: "product_c",
      text: "Part C-C text",
      latestUseDate: "2022-09-01T00:00:00.000Z",
      registeredDate: "2021-09-01T00:00:00.000Z",
      favorite: true,
      tags: [],
    },
  ]);

  return {
    parts: readonly(parts),
  };
}